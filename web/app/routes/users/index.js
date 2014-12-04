import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  model: function(params) {
    if (params.q) {
      return this.store.find('user', {q: params.q});
    } else {
      return this.store.find('user');
    }
  }
});
