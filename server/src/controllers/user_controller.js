const {
  get_users,
  get_user,
  delete_user,
  update_user,
} = require("../services/user_service");

exports.get_all_users = async (req, res) => {
  try {
    const users = await get_users();
    if (!users.length)
      return res.status(404).json({ message: "NO HAY USUARIOS REGISTRADOS" });

    return res.status(200).json(users);
  } catch (err) {
    return res.sendStatus(500);
  }
};

exports.get_one_user = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await get_user({ _id: id });
    if (!user)
      return res.status(404).json({ message: "USUARIO NO ENCONTRADO" });

    return res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    return res.sendStatus(500);
  }
};

exports.delete_one_user = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await get_user({ _id: id });
    if (!user)
      return res.status(400).json({ message: "USUARIO NO ENCONTRADO" });

    const deleted_user = await delete_user({ _id: id });

    return res
      .status(200)
      .json({ message: `USUARIO ${deleted_user.name} ELIMINADO` });
  } catch (err) {
    return res.sendStatus(500);
  }
};

exports.update_one_user = async (req, res) => {
  try {
    const { name, surname, username, email } = req.body;
    const { id } = req.params;
    const user = await get_user({ _id: id });
    if (!user)
      return res.status(400).json({ message: "USUARIO NO ENCONTRADO" });

    const updated_user = await update_user(
      {
        _id: id,
      },
      { name, surname, username, email }
    );

    return res
      .status(200)
      .json({ message: `USUARIO ${updated_user.name} ACTUALIZADO` });
  } catch (err) {
    return res.sendStatus(500);
  }
};
