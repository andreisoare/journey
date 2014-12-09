import Ember from 'ember';

export default Ember.View.extend({
  saveScroll: function() {
    this.set('controller.scroll', Ember.$(document).scrollTop());
  }.on('willDestroyElement'),

  restoreScroll: function() {
    var scroll = this.get('controller.scroll');
    if (scroll) {
      Ember.$(document).scrollTop(scroll);
    }
  }.on('didInsertElement')
});
