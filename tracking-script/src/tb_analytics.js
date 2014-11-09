
require('bower_components/jquery/dist/jquery.min');

(function() {
  require('src/cookie');
  require('src/md5');

  var $ = jQuery.noConflict(true);
  var VERSION = "1.0";
  var URL = "http://analytics.talentbuddy.co/api/1";
  var ANON_PREFIX = "__tb_anon_"

  var tbAnalytics = window.tbAnalytics = window.tbAnalytics || [];

  (function(defaultConfig) {
    tbAnalytics.config = tbAnalytics.config || defaultConfig;
    Object.keys(defaultConfig).forEach(function(key) {
      if (tbAnalytics.config[key] == null) {
        tbAnalytics.config[key] = defaultConfig[key];
      }
    });
  })({
    trackPages: true,
    trackDistinctReferrers: true
  });

  generateRandomId();


  tbAnalytics.track = function(event, properties) {
    console.log(event, properties);

    $.ajax({
      url: URL + "/track",
      type: 'POST',
      dataType: 'json',
      data: {
        event: event,
        properties: properties,
        userId: get_uid(),
        version: VERSION,
        key: tbAnalytics.config.key
      },
      success: function() {},
      error: function() {}
    });
  };


  tbAnalytics.identify = function(uid, properties) {
    console.log(id, properties);

    var oldId = get_uid();
    if (oldId.slice(0, ANON_PREFIX.length) !== ANON_PREFIX) {
      oldId = null;
    }

    set_uid(uid);

    $.ajax({
      url: URL + "/identify",
      type: 'POST',
      dataType: 'json',
      data: {
        oldId: oldId,
        newId: uid,
        properties: properties,
        version: VERSION,
        key: tbAnalytics.config.key
      },
      success: function() {},
      error: function() {}
    });
  };


  tbAnalytics.page = function() {
    tbAnalytics.track("Page View", {
      title: document.title,
      path: document.location.href
    });
  };


  for (var idx = 0; idx < tbAnalytics.length; idx++) {
    var call = tbAnalytics[idx];
    var method = call[0];
    var arguments = call.slice(1);
    tbAnalytics[method].apply(null, arguments);
  }

  if (tbAnalytics.config.trackPages) {
    pollForURLChanges(function() {
      tbAnalytics.page();
    });
  }

  if (tbAnalytics.config.trackDistinctReferrers) {
    // TODO
  }


  function pollForURLChanges(cbk) {
    var url = document.location.href
    window.setInterval(function() {
      var newUrl = document.location.href;
      if (newUrl !== url) {
        cbk(newUrl);
      }
      url = newUrl;
    }, 2000);
  }


  function generateRandomId() {
    var uid = get_uid();
    if (uid && uid.length > 0) {
      return;
    }

    var s = window.location.host +
            navigator.userAgent +
            tbAnalytics.config.key +
            new Date().getTime();

    uid = ANON_PREFIX + CryptoJS.MD5(s);
    set_uid(uid);
    return uid;
  };


  function set_uid(uid) {
    set_cookie("_tba_uid", uid);
  }


  function get_uid() {
    return get_cookie("_tba_uid");
  }


  function set_cookie(name, value) {
    CookieManager.setItem(name, JSON.stringify(value), Infinity, "/");
  }


  function get_cookie(name) {
    return JSON.parse(CookieManager.getItem(name));
  }
})();
