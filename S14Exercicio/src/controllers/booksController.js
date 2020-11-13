const books = require("../models/books");

const postBooks = (req, res) => {
  books.countDocuments((err, count) => {
    if (err) {
      res.status(424).send({ message: err.message });
    } else {
      const book = new books(req.body);

      book.id = count + 1;
      book.save((err) =>
        err
          ? res.status(424).send({ message: err.message })
          : res.status(201).send({
              status: true,
              message: "Successfully included books!",
            })
      );
    }
  });
};

const getAll = (req, res) => {
  console.log(req.url);

  books.find((err, book) => {
    res.status(200).send(book);
  });
};

const getStock = (req, res) => {
  books.find({ stock: true }, (err, book) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send(book);
  });
};

const getCategory = (req, res) => {
  const genre = req.query;

  books.find(genre, (err, book) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send(book);
  });
};

const getById = (req, res) => {
  const id = req.params.id;

  books.find({ id }, (err, book) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send(book);
  });
};

const putBook = (req, res) => {
  const id = req.params.id;

  books.find({ id }, (err, book) => {
    if (book.length > 0) {
      books.updateMany({ id }, { $set: req.body }, (err) =>
        err
          ? res.status(424).send({ message: err.message })
          : res.status(200).send({ message: "Record successfully changed" })
      );
    } else {
      res.status(200).send({
        message: "No records to be updated with this id",
      });
    }
  });
};

const deleteBook = (req, res) => {
  const id = req.params.id;

  books.find({ id }, (err, book) => {
    if (book.length > 0) {
      books.deleteOne({ id }, (err) =>
        err
          ? res.status(424).send({ message: err.message })
          : res.status(200).send({
              status: "Success",
              message: "Book successfully removed",
            })
      );
    } else {
      res.status(200).send({
        message: "No book to be removed",
        status: "Empty",
      });
    }
  });
};

module.exports = {
  postBooks,
  getAll,
  getStock,
  getCategory,
  getById,
  putBook,
  deleteBook,
};
