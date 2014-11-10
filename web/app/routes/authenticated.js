import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition, queryParams) {
    if (!this.get('session.isAuthenticated')) {
      this.get('session').setProperties({
        transition: transition,
        queryParams: queryParams
      });
      this.transitionTo('login');
    }
  }
});
