const router = require("express").Router();
const missingNumberController  = require("../controller/missing-number-controller");

router.post("/missing", missingNumberController);
module.exports = router;