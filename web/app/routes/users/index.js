import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.store.find('user', {
      chunkSize: 20,
      chunk: 0,
      q: params.q
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.reset();
  }
});
