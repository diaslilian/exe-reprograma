const filmes = require("../models/filmes.json");

const getAll = (req, res) => {
  res.send(filmes);
};

module.exports = { getAll };
