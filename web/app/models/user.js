import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  firstName: attr(),
  lastName: attr(),
  name: attr(),
  email: attr(),
  created: attr('date'),
  firstSeen: attr('date'),
  lastSeen: attr('date'),
  country: attr(),
  city: attr(),
  lastIpUsed: attr(),
  properties: attr('object')
});
