const { Tasks } = require("../../database/models/index");

const criar = async function (tasks) {
  const tasksCriado = await Tasks.create(tasks);
  return tasksCriado;
};

const atualizar = async function (tasks, id) {
  await Tasks.update(tasks, {
    where: { id: id },
  });
};

const encontrarTodos = async function () {
  const tasks = await Tasks.findAll();
  return tasks;
};

const encontrarPorId = async function (id) {
  const tasks = await Tasks.findByPk(id);
  return tasks;
};

const encontrarUmPorWhere = async function (where) {
  const tasks = await Tasks.findOne({
    where: where,
  });
  return tasks;
};

const encontrarPorUsuario = async function (where) {
  const tasks = await Tasks.findAll({
    where: where,
  });
  return tasks;
};

const deletar = async function (id) {
  return await Tasks.destroy({ where: { id: id } });
};

module.exports = {
  criar: criar,
  atualizar: atualizar,
  encontrarTodos: encontrarTodos,
  encontrarPorId: encontrarPorId,
  encontrarUmPorWhere: encontrarUmPorWhere,
  deletar: deletar,
  encontrarPorUsuario: encontrarPorUsuario,
};
