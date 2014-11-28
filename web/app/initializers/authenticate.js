import Ember from 'ember';

export function initialize(container, application) {
  var store = container.lookup('store:main');
  var session = container.lookup('service:session');
  application.deferReadiness();
  store.find('account', {authenticated: true}).then(function(accounts) {
    if (accounts && accounts.get('length') === 1) {
      var account = accounts.get('firstObject');
      session.set('account', account);
    }
    Ember.$(".global-preloader").hide();
    application.advanceReadiness();
  });
}

export default {
  name: 'authenticate',
  after: ['store', 'session-service'],
  initialize: initialize
};
