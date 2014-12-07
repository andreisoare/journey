import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    logout: function() {
      this.set('session.account', null);
      this.get('targetObject').transitionToRoute('auth.login');
    }
  }
});
