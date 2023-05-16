const express = require("express");
const router = express.Router();
const {
  get_all_users,
  get_one_user,
  delete_one_user,
  update_one_user,
} = require("../controllers/user_controller");

router.get("/get-all", get_all_users);
router.get("/get-one/:id", get_one_user);
router.delete("/delete-one/:id", delete_one_user);
router.patch("/update-one/:id", update_one_user);

module.exports = router;
