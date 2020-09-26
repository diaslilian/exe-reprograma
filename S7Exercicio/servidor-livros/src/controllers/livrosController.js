const livros = require("../model/livros.json");

const getAll = (req, res) => {
  res.send(livros);
};

module.exports = { getAll };
