import Ember from 'ember';

export default Ember.ObjectController.extend({
  displayProperties: ["Email", "Sign up date"],

  displayPropertyValues: function() {
    return [this.get('email'), this.get('createdAgo')];
  }.property('email', 'created')
});
