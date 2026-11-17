function auth(req, res, next) {
  const token = req.headers.authorization;

  if (token !== "123") {
    return res.status(401).json({ erro: "Não autorizado" });
  }
  next();
}

module.exports = auth;