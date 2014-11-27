import AuthenticatedRoute from 'journey/routes/authenticated';

export default AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('user');
  }
});
