module.exports = function(app) {
  var express = require('express');
  var eventsRouter = express.Router();

  var util = require('../util');
  var eventFixtures = require('../fixtures/events');
  var eventObjects = eventFixtures.map(function(event, index) {
    return {
      _id: "e" + index,
      name: event[0],
      referrer: event[1],
      created: util.randomDate(new Date(2014, 0, 1), new Date())
    };
  }).sort(function(a, b) {
    if (a.created > b.created) return -1;
    if (a.created < b.created) return 1;
    return 0;
  });

  eventsRouter.get('/', function(req, res) {
    var fullEventObjects = eventObjects.map(function(event) {
      return {
        _id: event._id,
        user: req.query.user,
        name: event.name,
        referrer: event.referrer,
        created: event.created
      };
    });
    var limit = parseInt(req.query.limit);
    var skip = parseInt(req.query.skip);
    var events = fullEventObjects.slice(skip, skip + limit);

    res.send({
      "events": events,
      "meta": {
        "total": eventObjects.length
      }
    });
  });

  app.use('/api/web/1/events', eventsRouter);
};
