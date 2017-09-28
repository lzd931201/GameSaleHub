var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    var dummyData = request.app.get('dummyData');
    var gameData = dummyData.games;
    response.render('index', {
       'gameData': gameData,
       'pageTitle': 'Index'
    });
    //next();
});

module.exports = router;
