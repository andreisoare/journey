module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  var util = require('../util');
  var userFixtures = require('../fixtures/users');
  var userObjects = userFixtures.map(function(user, index) {
    return {
      _id: "u" + index,
      name: user,
      email: user.toLowerCase().replace(' ', '.') + '@gmail.com',
      created: util.randomDate(new Date(2014, 0, 1), new Date())
    };
  }).sort(function(a, b) {
    if (a.created > b.created) return -1;
    if (a.created < b.created) return 1;
    return 0;
  });

  usersRouter.get('/', function(req, res) {
    var query = (req.query.q || '').toLowerCare();

    var filteredUsers;
    if (query) {
      filteredUsers = userObjects.filter(function(user) {
        return user.name.toLowerCase().indexOf(query) !== -1;
      });
    } else {
      filteredUsers = userObjects;
    }

    var limit = parseInt(req.query.limit);
    var skip = parseInt(req.query.skip);
    var users = filteredUsers.slice(skip, skip + limit);

    res.send({
      "users": users,
      "meta": {
        "total": filteredUsers.length
      }
    });
  });

  usersRouter.get('/:id', function(req, res) {
    var id = req.params.id;
    var index = parseInt(id.slice(1));
    res.send({"user": userObjects[index]});
  });

  app.use('/api/web/1/users', usersRouter);
};
