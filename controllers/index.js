const router = require("express").Router();
const apiRoutes = require("../controllers/api");
const homeRoutes = require("../controllers/home-routes");
const dashboardRoutes = require("../controllers/dashboard-routes")


router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/", dashboardRoutes);


module.exports = router;