const express = require("express");
const router = express.Router();
const {
  get_user_cards,
  post_user_card,
  delete_user_card,
  update_user_card,
} = require("../controllers/card_controller");
const verify_token = require("../middlewares/token_validator");

router.route("/").get(verify_token, get_user_cards).post(verify_token, post_user_card);

router.route("/:id").delete(verify_token, delete_user_card).put(verify_token, update_user_card);

module.exports = router;
