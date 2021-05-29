const router = require("express").Router();
const mergesortController  = require("../controllers/merge-sort-controller")
const bubblesortController = require("../controllers/bubble-sort-controller")
const quicksortController = require("../controllers/quick-sort-controller")
const selectionController = require("../controllers/selection-sort-controller")

router.post("/merge", mergesortController)
router.post("/bubblesort",bubblesortController)
router.post("/quicksort",quicksortController)
router.post("/selection",selectionController)

module.exports = router;