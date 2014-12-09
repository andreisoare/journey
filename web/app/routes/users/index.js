import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  model: function(params) {
    var query = {
      chunkSize: 20,
      chunk: 0
    };

    if (params.q) {
      query.q = params.q;
    }

    return this.store.find('user', query);
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    controller.setProperties({
      chunk: 0,
      hasMore: this.store.metadataFor('user').total > model.get('length'),
    })
  }
});
