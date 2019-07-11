var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../../models/user');
var passport = require('passport');
var clientInfo = require('../../models/clientInfo')
require('../../config/passport')(passport);

/* GET ALL BOOKS */
router.get('/:clientID', function (req, res) {
    // var token = getToken(req.headers);
    // if (token) {
    // User.find({ email: "jane@gmail.com" }, function (err, books) {
    //     if (err) return next(err);
    //     console.log(books);
    //     res.json(books);
    // });

    clientInfo.find({clientID: req.params.clientID}, function(err, post) {
        if (err) throw (err);
        res.json(post)
    })
});

router.get('/', function(req, res){
    clientInfo.find().then(post => res.json(post)).catch(err => console.log(err));
});

router.post('/', function (req, res) {

    console.log(req.body)

        clientInfo.update({clientID: req.body.clientID}, req.body, {upsert: true, setDefaultsOnInsert: true}, function(err, post) {
            if (err) throw (err);
            res.json(post);
        });
});

module.exports = router;