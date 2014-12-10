import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  modelCache: Ember.Object.create(),

  model: function(params) {
    var cache = this.get('modelCache');
    var cacheKey = "q:" + (params.q || "");

    var oldModel = cache.get(cacheKey);
    if (oldModel) {
      oldModel.set('isCached', true);
      return oldModel;
    }

    var promise = this.store.find('user', {
      limit: 20,
      skip: 0,
      q: params.q
    });

    promise.then(function(model) {
      cache.set(cacheKey, model);
    });

    return promise;
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    if (!model.get('isCached')) {
      controller.reset();
    }
  }
});
