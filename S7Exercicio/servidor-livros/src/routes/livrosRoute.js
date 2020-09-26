const express = require("express");

const router = express.Router();
const controller = require("../controllers/livrosController");

router.get("/livros", controller.getAll);

module.exports = router;
