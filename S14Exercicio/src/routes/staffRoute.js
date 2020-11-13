const express = require("express");
const router = express.Router();

const controller = require("../controllers/staffController");

router.post("/", controller.postStaff);

router.get("/", controller.getAll);
router.get("/age", controller.getAgeStaff);
router.get("/active", controller.getActive);

router.put("/:id", controller.putStaff);

router.delete("/:id", controller.deleteStaff);

module.exports = router;
