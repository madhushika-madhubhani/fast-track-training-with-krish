const express = require("express");
const router = require("./routes/router");
const app = express();
app.use(express.json());
app.use("/", router);


app.listen(8090, () => {
    console.log("server running on port", 8090);
})