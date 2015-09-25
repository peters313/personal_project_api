var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Info = require('../models/schema'); //path to the schema being used


//provides the search functionality through either the URL or through a program such as Postman
router.get('/', function(req, res){
    var sportSearch = req.query.sport;
    var winSearch = req.query.winner;
    var loseSearch = req.query.loser;
    var yearSearch = req.query.year;
    var seriesSearch = req.query.series;
    var scoreSearch = req.query.score;
    var winningGoalSearch = req.query.winninggoal;
    var attendanceSearch = req.query.attendance;
    var superBowlSearch = req.query.superbowl;
    var venueSearch = req.query.venue;

//finds the results based off of the search parameters entered in
    Info.find({sport: sportSearch,
                winner: winSearch,
                loser: loseSearch,
                year: yearSearch,
                series: seriesSearch,
                score: scoreSearch,
                winninggoal: winningGoalSearch,
                attendance: attendanceSearch,
                superbowl: superBowlSearch,
                venue: venueSearch

    }, function(err, data){
        if(err)
            res.send(err);
        res.json(data);
    });
});


module.exports = router;

