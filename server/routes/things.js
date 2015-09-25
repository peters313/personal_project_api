var express = require('express');
var router = express.Router();
var path = require('path');
var Info = require('../models/schema'); //path to the schema being used



//allows the creation of new objects using the Info schema
router.route('/admin')
    .post(function(req, res) {
        Info.create(req.body, function(err, post){
            if(err) {
                console.log(err);
                return next(err);
            }
            res.json(post);
        });
    });




router.get("/*", function(req,res,next){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});


module.exports = router;

