const express = require("express");
const router = express.Router();
const {
  create_one_transaction,
} = require("../controllers/transaction_controller");
const verify_token = require("../middlewares/token_validator");

router.post("/create-transaction", verify_token, create_one_transaction);

module.exports = router;
