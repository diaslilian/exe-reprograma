const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const SECRET = process.env.SECRET;

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("Erro na autorizacao do headers");
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, SECRET);

    req.colabEmail = decoded.email;

    return next();
  } catch (err) {
    return res.status(401).send("Token invalido");
  }
};
