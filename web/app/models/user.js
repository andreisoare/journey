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
  properties: attr('object'),

  fullName: function() {
    return this.get('name') ||
           ((this.get('firstName') || '') + " " + (this.get('lastName') || '')).trim() ||
           this.get('email') ||
           this.get('id');
  }.property('firstName', 'lastName', 'name', 'email', 'id'),

  defaultAvatar: function() {
    var avatars = ["blue", "green", "orange", "red", "yellow"].map(function(color) {
      return "/img/avatars/avatar-" + color + ".png";
    });
    var avatar = avatars[Math.floor(Math.random() * avatars.length)];
    return avatar;
  }.property()
});
