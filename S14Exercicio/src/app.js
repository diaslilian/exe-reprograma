const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv/config");

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.qfj9u.mongodb.net/bookstore?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection made successfully.");
});

const index = require("./routes/index");
const books = require("./routes/booksRoute");
const staffs = require("./routes/staffRoute");

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
app.use("/staff", staffs);

module.exports = app;
