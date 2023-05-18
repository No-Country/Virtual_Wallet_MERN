const { get_cards, create_card, delete_card, update_card } = require("../services/card_service");

exports.get_user_cards = async (req, res) => {
  const cards = await get_cards(req.user);
  res.status(200).json(cards);
};

exports.post_user_card = async (req, res) => {
  const { name, description, type, number, expiration_date, cvv, balance } = req.body;

  if (!name || !description || !type || !number || !expiration_date || !cvv)
    return res.status(400).json({ message: "Missing fields" });

  const card = await create_card(name, description, type, number, expiration_date, cvv, req.user, balance);

  if (!card) return res.status(400).json({ message: "Error creating card" });
  res.status(200).json(card);
};

exports.delete_user_card = async (req, res) => {
  const { id } = req.params;
  const card = await delete_card(id);
  if (!card) return res.status(400).json({ message: "Card does not exist" });
  res.status(204).json();
};

exports.update_user_card = async (req, res) => {
  const { id } = req.params;
  const card = await update_card(id, req.body);
  if (!card) return res.status(400).json({ message: "Error updating card" });
  res.status(200).json(card);
};
