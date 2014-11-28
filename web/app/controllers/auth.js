import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',

  defaultAvatar: function() {
    var url = window.location.href;
    var arr = url.split('/');
    return arr[0] + "//" + arr[2] + "/img/avatars/avatar-turquoise.png";
  }.property()
});
