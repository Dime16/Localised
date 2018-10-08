const express = require("express");
const app = express();
const path = require("path");

const port= process.env.PORT || 3000;

const publicPath = path.join(__dirname, "/");

app.use(express.static(publicPath));

app.get("/", (req, res, next) => {
    res.render("index.html");
});

app.listen(port, () => {
    console.log("Server running on port 3000");
});