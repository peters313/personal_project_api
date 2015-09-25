var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var baseballFacts = require('../models/facts/randombaseball');

router.get('/', function(req, res, next){
    res.send(baseballFacts());
});
module.exports = router;