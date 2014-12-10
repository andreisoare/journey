import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['user'],
  user: Ember.computed.alias('controllers.user.model'),

  limit: 10,

  hasMore: function() {
    var total = this.get('model.meta.total');
    var currentLength = this.get('model.length');
    return total > currentLength;
  }.property('model.meta.total', 'model.[]'),

  actions: {
    // Triggered by the infinite-scroll component
    // http://blog.jasonkriss.com/building-an-infinite-scroll-ember-cli-addon
    fetchMore: function(cbk) {
      cbk(this.store.find('event', {
        user: this.get('user.id'),
        limit: this.get('limit'),
        skip: this.get('model.length')
      }));
    }
  }
});
