const router = require("express").Router();
const binarySearchFuction  = require("../controller/binaryController");
const linearSearchFuction = require("../controller/binaryController")

router.post("/binarysearch", binarySearchFuction);
router.post("/linearsearch",linearSearchFuction);

module.exports = router;