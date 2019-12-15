var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/item', function(req, res, next) {
  res.status(201).send()
})

router.put('/item', function(req, res, next) {
  res.status(200).send()
})

router.get('/item', function(req, res, next) {
  res.status(200).send()
})

router.delete('/item', function(req, res, next) {
  res.status(200).send()
})


module.exports = router;
