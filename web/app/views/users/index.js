import Ember from 'ember';

export default Ember.View.extend({
  saveScroll: function() {
    this.get('controller').send('saveScroll', Ember.$(document).scrollTop());
  }.on('willDestroyElement'),

  restoreScroll: function() {
    Ember.$(document).scrollTop(this.get('controller.scroll') || 0);
  }.on('didInsertElement')
});
