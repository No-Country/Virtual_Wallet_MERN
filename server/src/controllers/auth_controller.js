
const { create_user, get_user_by_email } = require("../services/auth_service");
const { create_token } = require("../helpers/token_creator");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');


exports.register = async (req, res) => {
  try {
    const { name, surname, username, email } = req.body
    if ((!name, !surname, !username, !email)) return res.sendStatus(400)

    const registered_user = await get_user_by_email(email)
    if (registered_user)
      return res.status(400).json({ message: 'EMAIL YA REGISTRADO' })

    const salt = 10
    const password = await bcrypt.hash(req.body.password, salt)
    const account_number = uuidv4().replace(/-/g, '').slice(0, 10);


    const user = await create_user({ name, surname, username, email, password, account_number });
    const { password: omit_psw, ...user_omit_psw } = user;
    return res.status(200).json(user_omit_psw).end();

  } catch (err) {
    return res.sendStatus(500)
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await get_user_by_email(email)
    if (!user) return res.status(404).json({ message: 'USUARIO NO ENCONTRADO' })

    const validated_password = await bcrypt.compare(password, user.password)
    if (!validated_password)
      return res
        .status(400)
        .json({ message: 'USUARIO O CONTRASEÑA INCORRECTA' })

    const token = create_token(user);
    console.log(token)

    const { _id, username } = user

    return res.status(200).json({ _id, username, token })
  } catch (err) {
    console.log(err.message)
    return res.sendStatus(500)
  }
}
