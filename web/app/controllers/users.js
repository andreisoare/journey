import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['auth', 'users/index'],

  defaultAvatar: Ember.computed.alias('controllers.auth.defaultAvatar'),

  q: Ember.computed.alias('controllers.users/index.q'),

  searchText: '',
  searchTextBinding: Ember.Binding.oneWay('q'),

  actions: {
    search: function() {
      this.set('q', this.get('searchText'));
    }
  }
});
