var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
  response.send(`
        <html>
        <h1>Game Sales Hub</h1>
        </html>
    `);
  next();
});

module.exports = router;
