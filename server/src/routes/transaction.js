const express = require("express");
const router = express.Router();
const {
  create_one_transaction,
  delete_one_transaction,
  get_transactions,
} = require("../controllers/transaction_controller");
const verify_token = require("../middlewares/token_validator");

router.post("/create-transaction", verify_token, create_one_transaction);
router.get("/get-transactions", verify_token, get_transactions);
router.delete("/delete-transaction/:id", verify_token, delete_one_transaction);

module.exports = router;
