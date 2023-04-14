const tasksRepository = require("../repositories/tasks.repository");
const createError = require("http-errors");
require("dotenv").config();

const criar = async function (tasks) {
  const existeTasks = await tasksRepository.encontrarUmPorWhere({
    nome: tasks.nome,
  });

  if (existeTasks) {
    return createError(409, "Tarefa já existe");
  }

  const repositoryCriado = await tasksRepository.criar(tasks);
  return repositoryCriado;
};

const atualizar = async function (tasks, id) {
  const existeTasks = await tasksRepository.encontrarPorId(id);

  if (!existeTasks) {
    return createError(404, "Tarefa não existe");
  }

  await tasksRepository.atualizar(tasks, id);

  return await tasksRepository.encontrarPorId(id);
};

const encontrarTodos = async function () {
  const tasks = await tasksRepository.encontrarTodos();
  return tasks;
};

const encontrarPorId = async function (id) {
  const tasks = await tasksRepository.encontrarPorId(id);

  if (!tasks) {
    return createError(404, "Task não encontrada");
  }

  return tasks;
};

const encontrarPorUsuario = async function (id) {
  const tasks = await tasksRepository.encontrarPorUsuario({
    usuario_id: id,
  });
  if (!tasks) {
    return createError(404, "Esse usuário não cadastrou tarefas");
  }

  return tasks;
};

const deletar = async function (id) {
  const tasks = await tasksRepository.encontrarPorId(id);

  if (!tasks) {
    return createError(404, "Tasks não encontrada");
  }

  await tasksRepository.deletar(id);
  return tasks;
};

module.exports = {
  criar: criar,
  atualizar: atualizar,
  encontrarTodos: encontrarTodos,
  encontrarPorId: encontrarPorId,
  deletar: deletar,
  encontrarPorUsuario: encontrarPorUsuario,
};
