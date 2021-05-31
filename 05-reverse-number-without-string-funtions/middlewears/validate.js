const express = require("express");

const validation = express();


validation.get("/", function(req, res) {
    res.json({
        status: " alive"
    });
});



module.exports = validation;
