import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  chunkSize: 10,
  chunk: 0,
  hasMore: true,

  model: function(params) {
    this.set('hasMore', true);
    this.set('chunk', 0);

    var query = {
      chunkSize: this.get('chunkSize'),
      chunk: this.get('chunk')
    };

    if (params.q) {
      query.q = params.q;
    }

    return this.store.find('user', query);
  },

  actions: {
    loadMore: function() {
      if (!this.get('hasMore')) {
        return;
      }

      this.set('chunk', this.get('chunk') + 1);

      var query = {
        chunkSize: this.get('chunkSize'),
        chunk: this.get('chunk'),
        q: this.get('controller.q')
      };

      var route = this;
      this.store.find('user', query).then(function(users) {
        if (!users || users.get('length') === 0) {
          route.set('hasMore', false);
        }
        route.modelFor('users/index').addObjects(users);
      });
    }
  }
});
