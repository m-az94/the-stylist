const db=require("../models");
// import userJSON from "../routes/api/userRef.json"
const userJson = require("../routes/api/userRef.json")

module.exports = {
    findAllOutfits: function(req, res){
        db.clientStylistRef
        .find()
        .then(dbOutfit => res.json(dbOutfit))
        .catch( err => res.status(422).json(err));
    },
    createNewOutfit: function (req, res){
        db.clientStylistRef
        .create(req.body)
        .then( dbOutfit => res.json(dbOutfit))
        .catch(err=>res.status(422).json(err));
    },
    findOutfits4User: function(req, res){

        // console.log(req.params.)
        db.clientStylistRef
        .find({clientID: req.params.clientID})
        .then(dbOutfit => res.json({data: dbOutfit}))
        .catch(err => res.status(422).json(err));


        // db.clientStylistRef.create(userJson)
        // .then(dbOutfit => res.json(dbOutfit))
        // .catch(err => console.log(err));
        // console.log(userJson)
    },
    isHot: function(req, res){
        console.log(req.params.id)
        db.clientStylistRef
        .findByIdAndUpdate({_id: req.params.id}, {$set: {hotOrNot: req.body.isHot}})
        .then(dbOutfit=> res.json(dbOutfit))
        .catch(err => console.log(err))
        // .catch(err => res.status(422).json(err))
    }
}