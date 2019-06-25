const router = require("express").Router();
// const apiRoutes = require("./api/dbRoute");
const book = require("./api/book");

const auth = require('./auth');


// API Routes
// router.use("/api", apiRoutes);
router.use("/api/auth", auth);
router.use("/api/book", book);



module.exports = router;