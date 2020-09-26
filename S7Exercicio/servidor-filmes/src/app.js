const express = require("express");
const app = express();

const index = require("./routes/index");
const filmes = require("./routes/filmesRoute");

app.use((req, res, next) => {
  console.log("Nova requisição"), next();
});

app.use("/", index);
app.use("/filmes", filmes);

module.exports = app;
