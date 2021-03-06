import Ember from 'ember';
import Validator from 'journey/mixins/validator';

export default Ember.Controller.extend(Validator, {
  needs: ['auth'],

  email: Ember.computed.alias('controllers.auth.email'),
  password: '',

  loginError: false,
  loginWaiting: false,

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
      var password = this.get('password');

      if (!email || !this.validEmail(email)) {
        this.failure(null, 'error', 'Invalid email');
        return;
      }

      if (!password) {
        this.failure(null, 'error', 'Invalid password');
        return;
      }

      var request = Ember.$.post("/api/web/1/login", {
        email: email,
        password: md5(password)
      });
      request.then(this.success.bind(this), this.failure.bind(this));
    }
  }
});
