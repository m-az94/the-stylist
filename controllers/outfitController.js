const db=require("../models");

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
        db.clientStylistRef
        .find({clientID: req.param.clientID})
        .then(dbOutfit => res.json(dbOutfit))
        .catch(err => res.status(422).json(err));
    },
    isHot: function(req, res){
        db.clientStylistRef
        .findOneAndUpdate({_id: req.param.id, hotOrNot: req.body})
        .then(dbOutfit=> res.json(dbOutfit))
        .catch(err => res.status(422).json(err))
    }
}