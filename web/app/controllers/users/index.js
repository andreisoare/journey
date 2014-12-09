import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['q'],
  q: '',

  hasMore: true,

  actions: {
    // Triggered by the infinite-scroll component
    // http://blog.jasonkriss.com/building-an-infinite-scroll-ember-cli-addon
    fetchMore: function(cbk) {
      this.set('chunk', this.get('chunk') + 1);

      var query = {
        chunkSize: this.get('chunkSize'),
        chunk: this.get('chunk'),
        q: this.get('q')
      };

      var controller = this;
      var promise = this.store.find('user', query);
      promise.then(function(users) {
        if (!users || users.get('length') === 0) {
          controller.set('hasMore', false);
        }
      });

      cbk(promise);
    }
  }
});
