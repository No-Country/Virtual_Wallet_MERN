const jwt = require("jwt-simple");
let moment = require("moment");
require("dotenv").config();

function verify_token(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "ACCESO DENEGADO" });
  }

  let token = req.headers.authorization.split(" ")[1];
  let payload = jwt.decode(token, process.env.SECRET_TOKEN);

  if (payload.exp <= moment().unix())
    return res.status(401).json({ message: "SESION EXPIRADA" });

  req.user = payload.sub;

  next();
}

module.exports = verify_token;
