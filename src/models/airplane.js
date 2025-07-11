'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Flight,{
        foreignKey : 'airplaneID',
        onDelete:'CASCADE'
      })
      this.hasMany(models.Seats,{
        foreignKey : 'airplaneId',
        onDelete:'CASCADE'
      })

    }
  }
  Airplane.init({
    modelNumber: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};