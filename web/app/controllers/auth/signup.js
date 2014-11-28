import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['auth'],

  name: '',
  email: Ember.computed.alias('controllers.auth.email'),
  password: '',

  signupError: false,
  signupWaiting: false,

  success: function(data, textStatus, jqXHR) {
    this.reset();
    this.store.pushPayload(data);
    var account = this.store.recordForId('account', data.account.id);
    this.set('session.account', account);
    var transition = this.get('session.transition');
    if (transition) {
      transition.retry();
    } else {
      this.transitionToRoute("users", {queryParams: {sortBy: 'created'}});
    }
  },

  failure: function(jqXHR, textStatus, errorThrown) {
    this.reset();
    this.set("signupError", errorThrown);
  },

  reset: function() {
    this.setProperties({
      signupWaiting: false,
    });
  },

  actions: {
    signup: function() {
      this.setProperties({
        signupError: false,
        signupWaiting: true
      });

      var name = this.get('name');
      var email = this.get('email');
      var password = this.get('password');

      if (!name) {
        this.failure(null, 'error', 'Invalid name');
        return;
      }

      if (!email) {
        this.failure(null, 'error', 'Invalid email');
        return;
      }

      if (!password) {
        this.failure(null, 'error', 'Invalid password');
        return;
      }

      var request = Ember.$.post("/api/web/1/signup", {
        name: name,
        email: email,
        password: md5(password)
      });
      request.then(this.success.bind(this), this.failure.bind(this));
    }
  }
});
