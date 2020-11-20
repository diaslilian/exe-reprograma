const express = require("express");
const router = express.Router();
const controller = require("../controllers/tarefasController");

const authMiddlerware = require("../middlewares/auth");

router.use(authMiddlerware);

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/", controller.postTarefa);

router.delete("/:id", controller.deleteTarefa);
router.delete("/", controller.deleteTarefaConcluida);
router.put("/:id", controller.putTarefa);

module.exports = router;
