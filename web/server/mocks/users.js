function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var users = [
  "Lucienne Richart",
  "Afton Vang",
  "Arlie Weckerly",
  "Darrel Hereford",
  "Kaitlyn Nghiem",
  "Tamala Breau",
  "Mel Overstreet",
  "Kathlyn Poat",
  "Dirk Maes",
  "Machelle Nishioka",
  "Ramona Kazee",
  "Kay Breeden",
  "Lorretta Balboa",
  "Elizabet Kirschbaum",
  "Veronika Limones",
  "Majorie Scarborough",
  "Priscila Hitchcock",
  "Cassondra Dresel",
  "Sherell Plotner",
  "Mikki Medel",
  "Eveline Munday",
  "Tyra Mahaney",
  "Daina Arndt",
  "Carla Hopp",
  "Clementina Elliot",
  "Hoa Palmeri",
  "Sydney Chappell",
  "Idell Blystone",
  "Oren Dobson",
  "Tobie Wynn",
  "Loris Hassan",
  "Monte Cowboy",
  "Bari Rangel",
  "Shaneka Bjornson",
  "Kathern Campisi",
  "Lucrecia Lymon",
  "Greg Alles",
  "Angle Posada",
  "Bryce Peed",
  "Debra Evitt",
  "Latonya Fling",
  "Tama Poudrier",
  "Carlene Hahne",
  "Cole Burbank",
  "Ronnie Babin",
  "Jeri Bruck",
  "Anjanette Nabors",
  "Hailey Matula",
  "Liana Cummins",
  "Bulah Levitsky"
];

var userObjects = users.map(function(user, index) {
  return {
    _id: "u" + index,
    name: user,
    email: user.toLowerCase().replace(' ', '.') + '@gmail.com',
    created: randomDate(new Date(2014, 0, 1), new Date())
  };
});

module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    var chunkSize = parseInt(req.query.chunkSize);
    var chunk = parseInt(req.query.chunk);
    var users = userObjects.slice(chunk * chunkSize, (chunk + 1) * chunkSize);
    res.send({"users": users});
  });

  usersRouter.get('/:id', function(req, res) {
    var id = req.params.id;
    var index = parseInt(id.slice(1));
    res.send({"user": userObjects[index]});
  });

  app.use('/api/web/1/users', usersRouter);
};
