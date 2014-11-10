import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.resource('users');
  this.resource('user', {path: '/:user_id'});
  this.route('catchall', {path: '/*wildcard'});
});

export default Router;