const Budget = require("../models/budget");

exports.create = (data) => new Budget(data).save().then((budget) => budget.toObject());

exports.get = () => Budget.find();

