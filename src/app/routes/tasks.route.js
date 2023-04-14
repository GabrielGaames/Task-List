//Quando é feita a requisição, o primeiro lugar onde ela passa é pelo arquivo de routes
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/procedimento.controller");
const verifyJWT = require("../middlewares/authorizator");
const taskValidator = require("../validators/tasks.validator");

router.post("/tasks", verifyJWT, taskValidator.criar(), taskController.criar);

router.get("/", verifyJWT, taskController.encontrarTodos);

router.get(
  "/:id",
  verifyJWT,
  taskValidator.encontrarPorId(),
  taskController.encontrarPorId
);

router.get("/usuario/:id");

router.put(
  "/:id",
  verifyJWT,
  taskValidator.atualizar(),
  taskController.atualizar
);

router.delete(
  "/:id",
  verifyJWT,
  taskValidator.deletar(),
  taskController.deletar
);

module.exports = router;
