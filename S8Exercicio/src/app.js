const express = require("express");
const app = express();

const musicas = require("./routes/musicasRoutes");

app.use(express.static("public"));

app.use("/", musicas);

app.get("/", (req, res) => {
  res.status(200).sendFile("./views/index.html", { root: __dirname });
});

app.get("*", (req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

module.exports = app;
