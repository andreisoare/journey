import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.route('users', function() {});
  this.route('user', {path: '/users/:user_id'}, function() {
    this.route('events', {path: '/'});
  });
  this.route('catchall', {path: '/*wildcard'});
  this.route('user/events');
});

export default Router;
