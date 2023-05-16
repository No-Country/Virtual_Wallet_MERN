const User = require("../models/user");

exports.get_users = () => User.find({}, { password: 0 });

exports.get_user = (id) => User.findOne(id, { password: 0 });

exports.delete_user = (id) => User.findByIdAndDelete(id);

exports.update_user = (id, values) => User.findByIdAndUpdate(id, values);
