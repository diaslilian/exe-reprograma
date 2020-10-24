const express = require("express");
const app = express();

app.use(express.json());

const index = require("./routes/index");
const series = require("./routes/seriesRoute");

app.use(express.static("public"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-with, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/series", series);

app.get("/", (req, res) => {
  res.status(200).sendFile("./views/index.html", { root: __dirname });
});

app.get("*", (req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

module.exports = app;
