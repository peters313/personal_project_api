var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var mongoose = require('mongoose');
var router = express.Router();
var stormpath = require('express-stormpath');

//connection to the mongo db
var mongoURI = "mongodb://localhost:27017/personal_project";
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
    if(err){
        console.log("MONGO ERROR: ", err);
    }
});

mongoDB.once('open', function(){
    console.log("CONNECTED TO MONGODB!");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("port", (process.env.PORT || 8000));

//establishing different ports to the API for users to get different information
app.use('/', index);
app.use('/api', router);
app.use('/api/mlb', router);
app.use('/api/nhl', router);
app.use('/api/nfl', router);
app.use('/api/nba', router);
app.use('/admin', router);


app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});
