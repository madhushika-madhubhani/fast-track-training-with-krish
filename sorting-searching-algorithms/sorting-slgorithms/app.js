const express = require("express");
const router = require("./routes/router");
const app = express();
app.use(express.json());
app.use("/", router);


app.listen(9091, () => {
    console.log("server running on port", 9091);
})