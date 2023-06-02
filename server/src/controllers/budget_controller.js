const { create, get, remove } = require("../services/budget_service");

exports.create_budget = async (req, res) => {
  try {
    const { limit, category, amount } = req.body;
    const user = req.user;
    if (!limit || !category || !amount) return res.sendStatus(400);

    const budget = await create({ limit, category, amount, user });

    return res.status(200).json(budget);
  } catch (err) {
    console.log(err.message);
    return res.sendStatus(500);
  }
};

exports.get_budget = async (req, res) => {
  try {
    const budget = await get();
    if (!budget.length) return res.sendStatus(404);

    return res.status(200).json(budget);
  } catch (err) {
    return res.sendStatus(500);
  }
};

exports.delete_budget = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await remove(id);
    if (!removed) return res.status(404);

    return res.status(200).json({ message: "Budget removed", removed });
  } catch (err) {
    return res.sendStatus(500);
  }
};
