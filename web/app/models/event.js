import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  name: attr(),
  created: attr('date'),
  referrer: attr(),
  campaign: attr(),
  browser: attr(),
  os: attr(),
  ip: attr(),
  properties: attr('object')
});
