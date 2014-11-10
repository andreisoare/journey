import Ember from 'ember';

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

  altText: function() {
    return this.get('alt') || this.get('email');
  }.property('alt')
});
