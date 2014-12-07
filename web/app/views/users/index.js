import Ember from 'ember';

export default Ember.View.extend({
  bindScroll: function() {
    var view = this;
    $(window).bind("scroll", function() {
      view.didScroll();
    });
  }.on('didInsertElement'),

  unbindScroll: function() {
    $(window).unbind("scroll");
  }.on('willDestroyElement'),

  didScroll: function() {
    if (this.isScrolledToBottom()) {
      this.get('controller').send('loadMore');
    }
  },

  isScrolledToBottom: function() {
    var distanceToTop = $(document).height() - $(window).height();
    var top = $(document).scrollTop();
    return top === distanceToTop;
  }
});
