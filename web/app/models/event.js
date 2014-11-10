import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  timestamp: attr('number'),
  referrer: attr(),
  campaign: attr(),
  browser: attr(),
  os: attr(),
  ip: attr(),
  properties: attr('object')
});
