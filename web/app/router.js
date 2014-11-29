import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('auth', {path: '/'}, function() {
    this.route('login', {path: '/'});
    this.route('signup', {path: '/signup'});
  });

  this.route('users', function() {
    this.route('user', {path: '/:user_id'}, function() {
      this.route('events', {path: '/'});
    });
  });

  this.route('catchall', {path: '/*wildcard'});
});

export default Router;
