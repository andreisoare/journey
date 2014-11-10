import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  firstName: attr(),
  lastName: attr(),
  name: attr(),
  email: attr(),
  projectId: attr()
});
