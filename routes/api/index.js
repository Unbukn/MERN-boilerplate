const router = require("express").Router();
const someDataRoutes = require("./somedata");

// Book routes
router.use("/somedata", someDataRoutes);

module.exports = router;
