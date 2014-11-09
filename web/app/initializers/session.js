import Ember from 'ember';

export function initialize(container, app) {
  var Session = Ember.Object.extend({
    account: null,

    isAuthenticated: function() {
      return this.get('account') != null;
    }.property('account')
  });

  app.register('session:main', Session);
  app.inject('route', 'session', 'session:main');
  app.inject('controller', 'session', 'session:main');
}

export default {
  name: 'session',
  initialize: initialize
};
