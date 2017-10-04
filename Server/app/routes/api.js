var express = require('express');
var router = express.Router();

router.get('/api/games', function(request, response, next) {
    var dummyData = request.app.get('dummyData');
    var gameData = dummyData.games;
    response.json(gameData);
});

module.exports = router;
