const express = require("express");
const router = express.Router();
const {
  models: { Choice },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await Choice.findAll());
  } catch (ex) {
    next(ex);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.send(await Choice.create(req.body));
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;