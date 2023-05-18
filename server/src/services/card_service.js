const Card = require("../models/card");

exports.get_cards = (user) => Card.find({ user });

exports.create_card = (name, description, type, number, expiration_date, cvv, user, balance) =>
  Card.create({
    name,
    description,
    type,
    number,
    expiration_date,
    cvv,
    user,
    balance,
  });

exports.delete_card = (id) => Card.findByIdAndDelete(id);

exports.update_card = (id, data) => Card.findByIdAndUpdate(id, data);
