module.exports = function(app) {
  var express = require('express');
  var signupRouter = express.Router();
  signupRouter.post('/', function(req, res) {
    res.send({"account":{
      _id: 1,
      first_name: "Andrei",
      last_name: "Soare",
      name: "Andrei Soare",
      email: "andrei.soare@gmail.com",
      project_id: "PROJECT_KEY"
    }});
  });
  app.use('/api/web/1/signup', signupRouter);
};
