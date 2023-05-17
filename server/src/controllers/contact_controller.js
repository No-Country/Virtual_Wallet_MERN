const { v4: uuidv4 } = require("uuid")
const { create_message, get_messages, delete_message } = require("../services/contact_service");

exports.create_one_message = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.sendStatus(400);

    const ref_number = uuidv4();
    const contact_message = await create_message({ name, email, message, ref_number });
    return res.status(200).json(contact_message);
  } catch (err) {
    return res.sendStatus(500);
  }
};


exports.get_all_messages = async (req, res) => {
  try{
    const contact_messages = await get_messages();
    if(!contact_messages.length) return res.status(404).json({ message: "NO HAY MENSAJES"})
    
    return res.status(200).json(contact_messages)
  }catch(err) {
    return res.sendStatus(500);
  }
};

exports.delete_one_message = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted_message = await delete_message({ _id: id }) 
    if(!deleted_message) return res.status(404).json({ message: "NO SE ENCONTRO EL MENSAJE" })

    return res.status(200).json({ message: `MENSAJE ${deleted_message.ref_number} ELIMINADO`})
  }catch(err) {
    return res.sendStatus(500);
  }
};