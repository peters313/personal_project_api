var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sportsSchema = new Schema({
    sport: String,
    year: String,
    winner: String,
    loser: String,
    series: String,
    score: String,
    winninggoal: String,
    attendance: String,
    superbowl: String,
    venue: String

});

module.exports = mongoose.model('Info', sportsSchema);