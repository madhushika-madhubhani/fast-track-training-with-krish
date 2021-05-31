var express = require("express");

var validation = express();


validation.get("/", function(req, res) {
    res.json({
        status: " alive"
    });
});



module.exports = validation;
