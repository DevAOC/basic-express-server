module.exports = (sequelize, DataTypes) =>
  sequelize.define('Car', {
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
