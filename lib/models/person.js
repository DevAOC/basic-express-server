'use strict';

module.exports = (sequelize, DataTypes) =>
  sequelize.define('Person', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
