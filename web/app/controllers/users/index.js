import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['q'],
  q: '',

  limit: 10,
  scroll: 0,

  reset: function() {
    this.set('scroll', 0);
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
      cbk(this.store.find('user', {
        limit: this.get('limit'),
        skip: this.get('model.length'),
        q: this.get('q')
      }));
    },

    saveScroll: function(scroll) {
      this.set('scroll', scroll);
    }
  }
});
