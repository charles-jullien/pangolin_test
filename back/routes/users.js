var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/add', function(req, res, next) {
  res.send('Add Friends');
});

router.delete('/delete', function(req, res, next) {
  res.send('Delete Friends');
});

module.exports = router;
