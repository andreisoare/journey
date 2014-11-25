import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// TODO: user.loading route doesn't work properly.
Router.map(function() {
  this.route('login', {path: '/'});
  this.resource('users', function() {});
  this.resource('user', {path: '/users/:user_id'});
  this.route('catchall', {path: '/*wildcard'});
});

export default Router;
