const router = require("express").Router();
const reversedNumberService= require("../services/reverse-number-service");

router.post("/getreversednumber", reversedNumberService);

module.exports = router;