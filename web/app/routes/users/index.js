import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  chunkSize: 10,
  chunk: 0,

  model: function(params) {
    var query = {
      chunkSize: this.get('chunkSize'),
      chunk: this.get('chunk')
    };

    if (params.q) {
      query.q = params.q;
    }

    return this.store.find('user', query);
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    controller.setProperties({
      chunkSize: this.get('chunkSize'),
      chunk: this.get('chunk'),
      hasMore: model.get('length') > 0,
    })
  }
});
