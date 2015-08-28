var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sportsSchema = new Schema({
    sport: String,
    year: Number,
    winner: String,
    loser: String,
    series: String
});

module.exports = mongoose.model('Info', sportsSchema);