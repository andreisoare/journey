module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();
  usersRouter.get('/', function(req, res) {
    res.send({"users":[]});
  });
  app.use('/api/web/1/users', usersRouter);
};
