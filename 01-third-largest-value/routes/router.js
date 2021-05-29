const router = require("express").Router();
const controller= require("../controller/controller");

router.post("/thirdlargest", controller);

module.exports = router;