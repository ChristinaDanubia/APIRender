let usuarios = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" },
];

function listar() {
  return usuarios;
}

function buscarPorId(id) {
  return usuarios.find((u) => u.id === id);
}

function criar(nome) {
  const novo = {
    id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
    nome,
  };
  usuarios.push(novo);
  return novo;
}

function atualizar(id, nome) {
  const usuario = usuarios.find((u) => u.id === id);
  if (!usuario) return null;
  usuario.nome = nome;
  return usuario;
}

function remover(id) {
  const index = usuarios.findIndex((u) => u.id === id);
  if (index === -1) return false;
  usuarios.splice(index, 1);
  return true;
}

module.exports = { listar, buscarPorId, criar, atualizar, remover };