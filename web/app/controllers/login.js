import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  password: '',

  loginError: false,
  loginWaiting: false,

  defaultAvatar: function() {
    var url = window.location.href;
    var arr = url.split('/');
    return arr[0] + "//" + arr[2] + "/img/avatars/avatar-blue.png";
  }.property(),

  success: function(data, textStatus, jqXHR) {
    this.reset();
    var account = this.store.push(data.account);
    this.set('session.account', account);
    this.transitionToRoute("users", {queryParams: {sortBy: 'created'}});
  },

  failure: function(jqXHR, textStatus, errorThrown) {
    this.reset();
    this.set("loginError", errorThrown);
  },

  reset: function() {
    this.setProperties({
      loginWaiting: false,
    });
  },

  actions: {
    login: function() {
      this.setProperties({
        loginError: false,
        loginWaiting: true
      });

      var email = this.get('email');
      var password = md5(this.get('password'));

      if (!email) {
        this.failure(null, 'error', 'Invalid email');
        return;
      }

      if (!password) {
        this.failure(null, 'error', 'Invalid password');
        return;
      }

      var request = Ember.$.post("/api/web/1/login", this.getProperties("email", "password"));
      request.then(this.success.bind(this), this.failure.bind(this));
    }
  }
});