const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/dev");

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "Sem token, autorização negada" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, jwtKey);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "O token não é válido" });
  }
};
