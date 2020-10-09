const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    title: "Reprograma - On7 Backend - API Post / Delete",
    version: "1.0.0",
  });
});

module.exports = router;
