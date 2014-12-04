import Ember from 'ember';
import ValidatorMixin from 'journey/mixins/validator';

module('ValidatorMixin');

// Replace this with your real tests.
test('it works', function() {
  var ValidatorObject = Ember.Object.extend(ValidatorMixin);
  var subject = ValidatorObject.create();
  ok(subject);
});
