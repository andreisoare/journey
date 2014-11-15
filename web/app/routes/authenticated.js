import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    if (!this.get('session.isAuthenticated')) {
      this.set('session.transition', transition);
      this.transitionTo('login');
    }
  }
});
