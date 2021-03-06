const books = require("../models/books.json");
const fs = require("fs");

const getAll = (req, res) => {
  console.log(req.url);

  res.status(200).send(books);
};

// get all books: http://localhost:8080/books

const postBooks = (req, res) => {
  console.log(req.body);

  const { id, title, author, genre, stock, editor } = req.body;

  books.push({
    id,
    title,
    author,
    genre,
    stock,
    editor,
  });

  fs.writeFile(
    "./src/models/books.json",
    JSON.stringify(books),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("File updated successfully!");
    }
  );

  res.status(201).send(books);
};

// post upload book: http://localhost:8080/books/

const deleteBooks = (req, res) => {
  const id = req.params.id;
  const filterBooks = books.find((book) => book.id == id);

  const index = books.indexOf(filterBooks);
  books.splice(index, 1);

  fs.writeFile(
    "./src/models/books.json",
    JSON.stringify(books),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Updated file!");
    }
  );

  res.status(200).send(books);
};

// delete book: http://localhost:8080/books/10

const getStock = (req, res) => {
  res.status(200).send(books.filter((book) => book.stock));
};

// get books in stock: http://localhost:8080/books/stock

const getCategory = (req, res) => {
  const genre = req.params.genre;

  res.status(200).send(books.filter((book) => book.genre.includes(genre)));
};

// get books by category: http://localhost:8080/books/Mystery

const putBook = (req, res) => {
  try {
    const id = req.params.id;

    const modifiedBook = books.find((book) => book.id == id);

    const updatedBook = req.body;

    const index = books.indexOf(modifiedBook);

    books.splice(index, 1, updatedBook);
    console.log(books);

    fs.writeFile(
      "./src/models/books.json",
      JSON.stringify(books),
      "utf8",
      function (err) {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("File updated successfully!");
      }
    );

    res.status(200).send(books);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};

// put book: http://localhost:8080/books/1

const patchBook = (req, res) => {
  const id = req.params.id;
  const updated = req.body;
  console.log(updated);

  try {
    const modifiedBook = books.find((book) => book.id == id);

    Object.keys(updated).forEach((key) => {
      modifiedBook[key] = updated[key];
    });

    fs.writeFile(
      "./src/models/books.json",
      JSON.stringify(books),
      "utf8",
      function (err) {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("File updated successfully!");
      }
    );

    res.status(200).send(books);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};

// patch book: http://localhost:8080/books/1

module.exports = {
  getAll,
  postBooks,
  deleteBooks,
  getStock,
  getCategory,
  putBook,
  patchBook,
};
