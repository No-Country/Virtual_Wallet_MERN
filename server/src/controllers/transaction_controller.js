const {
  create_transaction,
  delete_transaction,
  get_user_transactions,
  get_user_account_number,
} = require("../services/transaction_service");

exports.create_one_transaction = async (req, res) => {
  try {
    const { card, concept, receiver_account, amount } = req.body;
    const user = req.user;

    if (!card || !concept || !receiver_account || !amount)
      return res.sendStatus(400);

    if (concept === "transferencia") {
      const transfer = await get_user_account_number(receiver_account);
      if (!transfer)
        return res.status(404).json({ message: "Cuenta destino inexistente." });
    }
    const transaction = await create_transaction({
      card,
      concept,
      receiver_account,
      amount,
      user,
    });
    return res.status(200).json(transaction).end();
  } catch (err) {
    console.log(err.message);
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
    if (!deleted_transaction)
      return res.status(404).json({ message: "TRANSACCION NO ENCONTRADA" });

    return res
      .status(200)
      .json({ message: `TRANSACCION ${deleted_transaction._id} ELIMINADA` });
  } catch (err) {
    console.log(err.message);
    return res.sendStatus(500);
  }
};
