module.exports = function(app) {
  var express = require('express');
  var accountsRouter = express.Router();
  accountsRouter.get('/', function(req, res) {
    res.send({"accounts":[]});
  });
  app.use('/api/web/1/accounts', accountsRouter);
};
