module.exports = function(app) {
  var express = require('express');
  var eventsRouter = express.Router();
  eventsRouter.get('/', function(req, res) {
    res.send({"events":[
      {
        _id: 1,
        user: req.query.user,
        name: "When Engineers Do Halloween",
        created: new Date(2014, 10, 20, 1, 28).getTime(),
        referrer: "http://www.redit.com/r/programming/comments/2ia5v12412d"
      },
      {
        _id: 2,
        user: req.query.user,
        name: "Full Stack Web",
        created: new Date(2014, 10, 19, 2, 20).getTime(),
        referrer: "http://www.talentbuddy.co/mentorship/"
      }
    ]});
  });
  app.use('/api/web/1/events', eventsRouter);
};
