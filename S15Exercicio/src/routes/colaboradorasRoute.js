const express = require("express");
const router = express.Router();
const controller = require("../controllers/colaboradorasController");

const authMiddlerware = require("../middlewares/auth");

router.post("/", controller.create);
router.post("/login", controller.login);

router.use(authMiddlerware);

router.get("/", controller.getAll);

router.put("/", controller.putColaboradora);

module.exports = router;
