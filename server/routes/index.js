var express = require('express');
var router = express.Router();
var path = require('path');
var Info = require('../models/schema'); //path to the schema being used


//get all of the data within the API

router.route('/api')
    .get(function(req, res) {
    Info.find({}).exec(function(err, data){
        res.json(data);
    });
});

//get just objects that have a sport of baseball
router.route('/api/mlb')
    .get(function(req, res) {
    Info.find({"Info.sport": 'baseball'}, function(err, data){
        if (err)
            res.send(err);
        console.log(data);
        res.json(data);
    });
});

//get just objects that have a sport of football
router.route('/api/nfl')
    .get(function(req, res) {
        Info.find({"Info.sport": 'football'}, function(err, data){
            if (err)
                res.send(err);
            res.json(data);
        });
});

//get just objects that have a sport of hockey
router.route('/api/nhl')
    .get(function(req, res) {
        Info.find({"Info.sport": 'hockey'}, function(err, data){
            if (err)
                res.send(err);
            res.json(data);
        });
});

//get just objects that have a sport of basketball
router.route('/api/nba')
    .get(function(req, res) {
        Info.find({"Info.sport": 'basketball'}, function(err, data){
            if (err)
                res.send(err);
            res.json(data);
        });
});

//allows the creation of new objects using the Info schema
router.route('/admin')
    .post(function(req, res) {
    Info.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;