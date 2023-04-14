const taskService = require("../services/procedimento.service");
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

    const response = await taskService.criar(req.body);

    if (response && response.message) {
      throw response;
    }

    res.send(["Task " + response.nome + " criado com sucesso!"]);
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

    const response = await taskService.atualizar(
      {
        nome: req.body.nome,
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
    const response = await taskService.encontrarTodos();
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

    const response = await taskService.encontrarPorId(req.params.id);

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

    const response = await taskService.encontrarPorUsuario(req.params.id);

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

    const response = await taskService.deletar(req.params.id);

    if (response && response.message) {
      throw response;
    }

    res.send({
      nome: response.nome,
      messageResponse: "task Deletada",
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
