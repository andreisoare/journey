module.exports = function(app) {
  var express = require('express');
  var accountsRouter = express.Router();
  accountsRouter.get('/', function(req, res) {
    //return res.send({"accounts":[]});

    if (req.query.authenticated) {
      res.send({"accounts": [
        {
          _id: 1,
          first_name: "Andrei",
          last_name: "Soare",
          name: "Andrei Soare",
          email: "andrei.soare@gmail.com",
          project_id: "PROJECT_KEY"
        }
      ]});
    } else {
      res.send({"accounts":[]});
    }
  });
  app.use('/api/web/1/accounts', accountsRouter);
};
