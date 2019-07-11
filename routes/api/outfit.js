const router = require("express").Router();
const controller = require("../../controllers/outfitController");

router
    .route("/stylistClientRef")
    .get(controller.findAllOutfits)
    .post(controller.createNewOutfit);

router
    .route("/stylistClientRef/client/:clientID")
    .get(controller.findOutfits4User)

router
    .route("/stylistClientRef/:id")
    .put(controller.isHot);
    
router
    .route("/stylistClientRef/stylist/:stylistID")
    .get(controller.findMyClients);

module.exports=router;
