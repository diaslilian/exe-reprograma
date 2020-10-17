const express = require("express");
const router = express.Router();

const controller = require("../controllers/booksController");

router.get("/", controller.getAll);

router.get("/stock", controller.getStock);
router.get("/:genre", controller.getCategory);

router.post("/", controller.postBooks);

router.delete("/:id", controller.deleteBooks);

router.put("/:id", controller.putBook);

router.patch("/:id", controller.patchBook);

module.exports = router;
