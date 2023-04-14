const tasksClienteService = require("../services/procedimento.service");
const { validationResult } = require("express-validator");
const createError = require("http-errors");

const criar = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, {
        errors: errors.array(),
      });
    }

    const response = await tasksClienteService.criar(req.body);

    if (response && response.message) {
      throw response;
    }

    res.send(["Task " + response.id + " adicionado com sucesso!"]);
  } catch (error) {
    return next(error);
  }
};

const atualizar = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, {
        errors: errors.array(),
      });
    }

    const response = await tasksClienteService.atualizar(
      {
        task_id: req.body.task_id,
        cliente_id: req.body.cliente_id,
      },
      req.params.id
    );

    if (response && response.message) {
      throw response;
    }

    res.send(response);
  } catch (error) {
    return next(error);
  }
};

const encontrarTodos = async function (req, res, next) {
  try {
    const response = await tasksClienteService.encontrarTodos();
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const encontrarPorId = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, {
        errors: errors.array(),
      });
    }

    const response = await tasksClienteService.encontrarPorId(req.params.id);

    if (response && response.message) {
      throw response;
    }

    res.send(response);
  } catch (error) {
    next(error);
  }
};

const encontrarPorUsuario = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, {
        errors: errors.array(),
      });
    }

    const response = await tasksClienteService.encontrarPorUsuario(
      req.params.id
    );

    if (response && response.message) {
      throw response;
    }

    res.send(response);
  } catch (error) {
    next(error);
  }
};

const deletar = async function (req, res, next) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw createError(422, {
        errors: errors.array(),
      });
    }

    const response = await tasksClienteService.deletar(req.params.id);

    if (response && response.message) {
      throw response;
    }

    res.send({
      nome: response.nome,
      messageResponse: "Task Deletada",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  criar: criar,
  encontrarTodos: encontrarTodos,
  encontrarPorId: encontrarPorId,
  atualizar: atualizar,
  deletar: deletar,
  encontrarPorUsuario: encontrarPorUsuario,
};
