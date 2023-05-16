const { create_transaction } = require("../services/transaction_service");

exports.create_one_transaction = async (req, res) => {
  try {

    const { card, concept, amount } = req.body;
    const user = req.user;

    if (!card || !concept || !amount) return res.sendStatus(400);

    const transaction = await create_transaction({ card, concept, amount, user});
    return res.status(200).json(transaction).end();
  } catch (err) {
    console.log(err.message)
    return res.sendStatus(500);
  }
};


exports.delete_one_transaction = async (req, res) => {
  try{
    
  }catch(err){
    return res.sendStatus(500);
  }
}