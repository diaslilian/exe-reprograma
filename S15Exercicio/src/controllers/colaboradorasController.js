const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const colaboradoras = require("../models/colaboradoras");

const getAll = (req, res) => {
  colaboradoras.find((err, colaboradoras) => {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(200).send(colaboradoras);
  });
};

const create = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
  req.body.senha = senhaComHash;

  const colaboradora = new colaboradoras(req.body);

  colaboradora.save((err) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }

    return res.status(201).send(colaboradora);
  });
};

const login = (req, res) => {
  colaboradoras.findOne({ email: req.body.email }, (err, colaboradora) => {
    if (!colaboradora) {
      return res
        .status(404)
        .send(`Não existe colaboradora com esse email ${req.body.email}`);
    }

    const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha);

    if (!senhaValida) {
      return res.status(403).send("erro na senha");
    }

    const token = jwt.sign({ email: req.body.email }, SECRET);

    return res.status(200).send(token);
  });
};

const putColaboradora = (req, res) => {
  const id = req.body;

  colaboradoras.find({ id }, function (err, colabs) {
    if (colabs.length > 0) {
      colaboradoras.updateMany({ id }, { $set: req.body }, function (err) {
        if (err) {
          res.status(500).send({ message: err.message });
        }
        res.status(200).send({ message: "Registro alterado com sucesso" });
      });
    } else {
      res.status(200).send({
        message: "Não há registros para serem atualizados com esse id",
      });
    }
  });
};

module.exports = {
  getAll,
  create,
  login,
  putColaboradora,
};
