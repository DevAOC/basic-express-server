'use strict';

module.exports = (sequelize, DataTypes) =>
  sequelize.define('People', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
