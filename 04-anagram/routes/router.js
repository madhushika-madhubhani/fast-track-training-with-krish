const router = require("express").Router();
const controller= require("../controller/controller");

router.post("/anagram", controller);

module.exports = router;