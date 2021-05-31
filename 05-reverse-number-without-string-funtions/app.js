const express = require("express");
const router = require("./routes/router");
const config = require("./config/config.json")
const app = express();
app.use(express.json());
app.use("/", router);

app.listen(config.port, () => {
    console.log("server running on port", config.port);
})