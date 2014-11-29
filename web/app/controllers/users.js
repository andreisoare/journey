import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['auth'],
  defaultAvatar: Ember.computed.alias('controllers.auth.defaultAvatar'),

  actions: {
    logout: function() {
      this.set('session.account', null);
      this.transitionToRoute('auth.login');
    }
  }
});
