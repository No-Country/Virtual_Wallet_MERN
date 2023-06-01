const express = require("express");
const router = express.Router();
const token_validator = require("../middlewares/token_validator");

const {
  create_budget,
  get_budget,
} = require("../controllers/budget_controller");

router.post("/create", token_validator, create_budget);
router.get("/get", token_validator, get_budget);

module.exports = router;
