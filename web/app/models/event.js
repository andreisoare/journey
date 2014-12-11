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
  properties: attr('object'),

  shortReferrer: function() {
    var maxLength = 40;
    var r = this.get('referrer');
    if (r.length > maxLength) {
      return r.slice(0, maxLength) + "...";
    }
    return r;
  }.property('referrer')
});
