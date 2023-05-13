const User = require("../models/user");

exports.create_user = (data) =>
  new User(data).save().then((user) => user.toObject());

exports.get_user_by_email = (email) => User.findOne({ email });
