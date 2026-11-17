const usuarioModel = require("../models/usuarioModel");

function listar(req, res) {
  res.json(usuarioModel.listar());
}

function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const usuario = usuarioModel.buscarPorId(id);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }
  res.json(usuario);
}

function criar(req, res) {
  const novo = usuarioModel.criar(req.body.nome);
  res.status(201).json(novo);
}

function atualizar(req, res) {
  const id = parseInt(req.params.id);
  const usuario = usuarioModel.atualizar(id, req.body.nome);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }
  res.json(usuario);
}

function remover(req, res) {
  const id = parseInt(req.params.id);
  const removido = usuarioModel.remover(id);

  if (!removido) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }
  res.json({ mensagem: "Usuário removido" });
}

module.exports = { listar, buscarPorId, criar, atualizar, remover };