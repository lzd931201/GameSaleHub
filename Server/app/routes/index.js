var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    var dummyData = request.app.get('dummyData');
    var gameData = dummyData.games;
    // response.render('index', {
    //    'gameData': gameData,
    //    'pageTitle': 'Index'
    // });
    response.sendFile(request.app.get('views') + '/index.html');
    //response.json({'Title': 'Game Sales Hub - Index'});
    //next();
});

module.exports = router;
