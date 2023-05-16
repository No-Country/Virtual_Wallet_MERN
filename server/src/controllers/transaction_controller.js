const {
  create_transaction,
  delete_transaction,
  get_user_transactions,
} = require("../services/transaction_service");

exports.create_one_transaction = async (req, res) => {
  try {
    const { card, concept, amount } = req.body;
    const user = req.user;

    if (!card || !concept || !amount) return res.sendStatus(400);

    const transaction = await create_transaction({
      card,
      concept,
      amount,
      user,
    });
    return res.status(200).json(transaction).end();
  } catch (err) {
    return res.sendStatus(500);
  }
};

exports.get_transactions = async (req, res) => {
  try {
    console.log(req.user);
    const transactions = await get_user_transactions();
    const filtered_transactions = transactions.filter(
      (tr) => tr.user.toString() === req.user
    );
    return res
      .status(200)
      .json({ message: "HISTORY TRANSACTIONS", filtered_transactions });
  } catch (err) {
    return res.sendStatus(500);
  }
};

exports.delete_one_transaction = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted_transaction = await delete_transaction({ _id: id });
    if (!delete_transaction) return res.sendStatus(400);

    return res
      .status(200)
      .json({ message: `TRANSACCION ${deleted_transaction._id} ELIMINADA` });
  } catch (err) {
    return res.sendStatus(500);
  }
};
