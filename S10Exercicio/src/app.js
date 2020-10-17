const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const index = require("./routes/index");
const books = require("./routes/booksRoute");
const staff = require("./routes/staffRoute");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/books", books);
app.use("/staff", staff);

module.exports = app;
