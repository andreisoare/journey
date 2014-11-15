import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
  size: 100,
  email: '',
  alt: '',
  defaultAvatar: '',

  gravatarUrl: function() {
    var email = this.get('email'),
        size = this.get('size'),
        defaultAvatar = this.get('defaultAvatar');

    var url = '//www.gravatar.com/avatar/' + md5(email) + '?s=' + size;
    if (defaultAvatar) {
      url += '&d=' + defaultAvatar;
    }
    return url;
  }.property('email', 'size', 'defaultAvatar'),

  urlProxy: function() {
    var gravatarUrl = this.get('gravatarUrl');
    var defaultAvatar = this.get('defaultAvatar');

    var promise = new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() { resolve({url: gravatarUrl}); };
      img.onerror = function() { resolve({url: defaultAvatar}); };
      img.src = gravatarUrl;
    });

    return DS.PromiseObject.create({
      promise: promise,
      content: {
        url: defaultAvatar
      }
    });
  }.property('gravatarUrl', 'defaultAvatar'),

  altText: function() {
    return this.get('alt') || this.get('email');
  }.property('alt')
});
