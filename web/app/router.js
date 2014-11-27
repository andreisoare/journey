import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// TODO: user.loading route doesn't work properly.
Router.map(function() {
  this.route('login', {path: '/'});
  this.route('users', function() {});
  this.route('user', {path: '/users/:user_id'});
  this.route('catchall', {path: '/*wildcard'});
});

export default Router;
