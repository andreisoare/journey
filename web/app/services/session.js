import Ember from 'ember';

export default Ember.Object.extend({
  account: null,

  isAuthenticated: function() {
    return this.get('account') != null;
  }.property('account')
});
