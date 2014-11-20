import Ember from 'ember';

export function initialize(container, application) {
  var Session = Ember.Object.extend({
    account: null,

    isAuthenticated: function() {
      return this.get('account') != null;
    }.property('account')
  });

  application.register('session:main', Session);
  application.inject('route', 'session', 'session:main');
  application.inject('controller', 'session', 'session:main');
}


export default {
  name: 'session',
  initialize: initialize
};
