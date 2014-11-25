import Ember from 'ember';
import AuthenticatedRoute from 'journey/routes/authenticated';

export default AuthenticatedRoute.extend({
  // TODO: Figure out a better way to do this. Also print message when there are
  // no events to displa.
  setupController: function(controller, model) {
    this._super(controller, model);

    controller.setProperties({
      loadingEvents: true,
      errorLoadingEvents: false,
      events: []
    });

    var promise  = this.store.find('event', {user: model.get('id')});

    promise.then(function(events) {
      controller.set('loadingEvents', false);
      controller.set('events', events);
    }, function() {
      controller.set('loadingEvents', false);
      controller.set('errorLoadingEvents', true);
    });
  }
});
