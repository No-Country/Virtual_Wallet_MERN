const express = require("express");
const router = express.Router();
const token_validator = require("../middlewares/token_validator");

const {
  create_budget,
  get_budget,
  delete_budget,
} = require("../controllers/budget_controller");

router.post("/create", token_validator, create_budget);
router.get("/get", token_validator, get_budget);
router.delete("/remove/:id", token_validator, delete_budget);

module.exports = router;
