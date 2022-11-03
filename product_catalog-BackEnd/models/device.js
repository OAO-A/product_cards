'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Device.init(
    {
      namespaceId: DataTypes.STRING,
      category: DataTypes.STRING,
      phoneId: DataTypes.STRING,
      itemId: DataTypes.STRING,
      name: DataTypes.STRING,
      priceRegular: DataTypes.INTEGER,
      priceDiscount: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      screen: DataTypes.STRING,
      capacity: DataTypes.STRING,
      capacityAvailable: DataTypes.ARRAY(DataTypes.STRING),
      color: DataTypes.STRING,
      colorsAvailable: DataTypes.ARRAY(DataTypes.STRING),
      processor: DataTypes.STRING,
      camera: DataTypes.STRING,
      ram: DataTypes.STRING,
      zoom: DataTypes.STRING,
      year: DataTypes.INTEGER,
      cell: DataTypes.ARRAY(DataTypes.STRING),
      images: DataTypes.ARRAY(DataTypes.STRING),
      resolution: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Device',
    },
    Device.create()
  );
  return Device;
};
