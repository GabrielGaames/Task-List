"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    static associate(models) {
      Procedimento.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
        as: "usuario",
      });
    }
  }
  Tasks.init(
    {
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tasks",
      tableName: "Tasks",
      paranoid: true,
    }
  );
  return Tasks;
};
