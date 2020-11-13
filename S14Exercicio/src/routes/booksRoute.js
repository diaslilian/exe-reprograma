const express = require("express");
const router = express.Router();

const controller = require("../controllers/booksController");

router.post("/", controller.postBooks);

router.get("/", controller.getAll);
router.get("/stock", controller.getStock);
router.get("/genre", controller.getCategory);
router.get("/:id", controller.getById);

router.put("/:id", controller.putBook);

router.delete("/:id", controller.deleteBook);

module.exports = router;
