const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
  {
    id: { type: Number },
    title: { type: String, required: true },
    author: { type: String },
    stock: { type: Boolean, required: true },
    editor: { type: String },
    genre: { type: Array, default: [] },
  },
  {
    versionKey: false,
  }
);

const books = mongoose.model("Books", booksSchema);

module.exports = books;
