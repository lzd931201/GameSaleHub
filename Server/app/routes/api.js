var express = require('express');
var router = express.Router();
const mongoClient = require('mongodb').MongoClient;

var db;

mongoClient.connect('mongodb://USERNAME:PASSWORD@ds135594.mlab.com:35594/gamesaleshub_test', (err, database) => {
   if (err) return console.log(err);
   db = database;
});


router.get('/api/games', function(request, response, next) {
    var cursor = db.collection('gamesaleshub_test').find();
    var resultArray = cursor.toArray((err, results) => {
        if(err) {
            return console.log(err);
        }
        //console.log(results);
        var gameData = results;
        //console.log(gameData);
        response.json(gameData);
    });
    // var dummyData = request.app.get('dummyData');
    // var gameData = dummyData.games;

});

module.exports = router;
