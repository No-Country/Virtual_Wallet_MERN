const express = require("express");
const router = express.Router();
const {
  create_one_message,
  get_all_messages,
  delete_one_message,
} = require("../controllers/contact_controller");

router.post("/create-message", create_one_message);
router.get("/get-messages", get_all_messages);
router.delete("/delete-message/:id", delete_one_message);

module.exports = router;
