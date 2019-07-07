var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../../models/user');
var passport = require('passport');
var clientInfo = require('../../models/clientInfo')
require('../../config/passport')(passport);

/* GET ALL BOOKS */
router.get('/', function (req, res) {
    // var token = getToken(req.headers);
    // if (token) {
    User.find({ email: "jane@gmail.com" }, function (err, books) {
        if (err) return next(err);
        console.log(books);
        res.json(books);
    });
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
});

/* SAVE BOOK */
router.post('/', function (req, res) {

        clientInfo.create(req.body)
        .then(function (dbNote) {
            return db.User.findOneAndUpdate({ _id: ObjectId("5d1e88102ebb3f0b8e26de39") }, { note: dbNote._id }, { new: true });
        })
        .then(function (dbnote) {
            // If we were able to successfully update an Article, send it back to the client
            res.json(dbnote);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });

    // console.log(req.body);
    // var token = getToken(req.headers);
    // if (token) {
    // User.create(req.body, function (err, post) {
    //     if (err) return next(err);
    //     res.json(post);
    // });
    // } else {
    //     return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    // }
});

module.exports = router;