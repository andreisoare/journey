import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var session = this.get('session');
    return this.store.find('account', {authenticated: true}).then(function(accounts) {
      if (accounts && accounts.get('length') === 1) {
        var account = accounts.get('firstObject');
        session.set('account', account);
        return account;
      } else {
        return null;
      }
    });
  }
});
