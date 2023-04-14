const { Usuario } = require("../../database/models/index");

//adicionando um novo usuário
const criar = async function (usuario) {
  const usuarioCriado = await Usuario.create(usuario);
  return usuarioCriado;
};
//listar todos
const encontrarTodos = async function () {
  const usuarios = await Usuario.findAll();
  return usuarios;
};

//encontrar por ID
const encontrarPorId = async function (id) {
  const usuario = await Usuario.findByPk(id);
  return usuario;
};

//listar pelo where
const encontrarUmPorWhere = async function (where) {
  const usuario = await Usuario.findOne({
    where: where,
  });
  return usuario;
};

module.exports = {
  criar: criar,
  encontrarTodos: encontrarTodos,
  encontrarPorId: encontrarPorId,
  encontrarUmPorWhere: encontrarUmPorWhere,
};
