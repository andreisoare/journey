import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['q'],
  q: '',

  chunkSize: 10,
  chunk: 0,

  reset: function() {
    this.set('chunk', 0);
  }.on('init'),

  hasMore: function() {
    var total = this.get('model.meta.total');
    var currentLength = this.get('model.length');
    return total > currentLength;
  }.property('model.meta.total', 'model.[]'),

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

      cbk(this.store.find('user', query));
    }
  }
});
