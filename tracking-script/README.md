# Tracking script

This README outlines the details of collaborating on the tracking script.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Grunt](http://gruntjs.com/)

## Build

* `npm install`
* `bower install`
* `grunt [--target=dev]`

## Integration

Paste this snippet into the header of your site:

```html
<script type="text/javascript">
  // Create a queue, but don't obliterate an existing one!
  window.tbAnalytics = window.tbAnalytics || [];

  // A list of the methods in TB Analytics to stub.
  window.tbAnalytics.methods = ['track', 'identify', 'page'];

  // Define a factory to create stubs. These are placeholders
  // for methods in TB Analytics so that you never have to wait
  // for it to load to actually record data. The `method` is
  // stored as the first argument, so we can replay the data.
  window.tbAnalytics.factory = function(method) {
    return function() {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(method);
      window.tbAnalytics.push(args);
      return window.tbAnalytics;
    };
  };

  // For each of our methods, generate a queueing stub.
  for (var i = 0; i < window.tbAnalytics.methods.length; i++) {
    var key = window.tbAnalytics.methods[i];
    window.tbAnalytics[key] = window.tbAnalytics.factory(key);
  }

  // Define a method to load TB Analytics from our CDN,
  // and that will be sure to only ever load it once.
  window.tbAnalytics.load = function(key, config) {
    if (document.getElementById('tb-analytics')) return;

    // Set the user preferred config.
    window.tbAnalytics.config = config || {};
    config.key = key;

    // Create an async script element based on your key.
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'tb-analytics';
    script.async = true;
    script.src = ('https:' === document.location.protocol
      ? 'https://' : 'http://')
      + 'analytics.talentbuddy.co/analytics.min.js';

    // Insert our script next to the first script element.
    var first = document.getElementsByTagName('script')[0];
    first.parentNode.insertBefore(script, first);
  };

  // Load TB Analytics with your key and custom configuration.
  window.tbAnalytics.load('PROJECT_KEY', {
    trackPages: true
  });
</script>
```
