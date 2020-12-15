var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:url', function(req, res, next) {
  var title =req.params.url;
  res.render('index', { title: title });
});
module.exports = router;
