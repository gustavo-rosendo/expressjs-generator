var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const date = new Date(1969, 6, 20);
  res.set('Date', date);
  res.set('Cache-Control', 'no-store'); // don't keep a cache copy (i.e.: always fetch fresh data from the server)
  res.set('Content-Type', 'text/html');

  res.render('index', { title: 'Express' });
});

module.exports = router;
