import DS from 'ember-data';
import Ember from 'ember';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return Ember.Object.create(serialized);
  },

  serialize: function(deserialized) {
    return deserialized.getProperties(Ember.keys(deserialized));
  }
});
