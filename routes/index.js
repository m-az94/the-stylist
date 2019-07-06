const router = require("express").Router();
// const apiRoutes = require("./api/dbRoute");
const book = require("./api/book");
const auth = require('./auth');
const scrape = require("./api/scrape")
const outfit = require("./api/outfit")



// API Routes
// router.use("/api", apiRoutes);
router.use("/api/auth", auth);
router.use("/api/book", book);
router.use("/api/scrape", scrape);
router.use("/api/outfit", outfit);



module.exports = router;