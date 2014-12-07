module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({"users":[
      {
        _id: "haven@gmail.com",
        last_name: "Haven",
        email: "haven@gmail.com",
        created: new Date(2014, 5, 6, 8, 7, 0).getTime()
      },
      {
        _id: "tobin@gmail.com",
        first_name: "Tobin",
        email: "tobin@gmail.com",
        created: new Date(2014, 7, 6, 8, 7, 0).getTime()
      },
      {
        _id: "harland@gmail.com",
        name: "Harland",
        email: "harland@gmail.com",
        created: new Date(2014, 4, 6, 8, 7, 0).getTime()
      },
      {
        _id: "xavier@gmail.com",
        name: "Xavier Neville",
        email: "xavier@gmail.com",
        created: new Date(2014, 6, 6, 8, 7, 0).getTime()
      },
      {
        _id: "brock@gmail.com",
        first_name: "Brock",
        email: "brock@gmail.com",
        created: new Date(2014, 3, 6, 8, 7, 0).getTime()
      }
    ]});
  });

  usersRouter.get('/:user_id', function(req, res) {
    res.send({"user": {
      _id: req.params.user_id,
      last_name: "Haven",
      email: req.params.user_id,
      created: new Date(2014, 5, 6, 8, 7, 0).getTime()
    }});
  });

  app.use('/api/web/1/users', usersRouter);
};
