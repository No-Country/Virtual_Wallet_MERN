const Contact = require("../models/contact");

exports.create_message = (data) =>
  new Contact(data).save().then((message) => message.toObject());

exports.get_messages = () => Contact.find();

exports.delete_message = (id) => Contact.findByIdAndDelete(id);
