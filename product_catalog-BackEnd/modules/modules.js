const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const Favourite = sequelize.define('favourite', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const Device = sequelize.define('device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  namespaceId: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  phoneId: { type: DataTypes.STRING, unique: true, allowNull: false },
  itemId: { type: DataTypes.STRING, unique: true, allowNull: false },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  priceRegular: { type: DataTypes.INTEGER },
  priceDiscount: { type: DataTypes.INTEGER, allowNull: false },
  description: {
    type: DataTypes.STRING,
    get() {
      return JSON.parse(this.getDataValue('device'));
    },
    set(value) {
      return this.setDataValue('device', JSON.stringify(value));
    },
  },
  screen: { type: DataTypes.STRING },
  capacity: { type: DataTypes.STRING },
  capacityAvailable: { type: DataTypes.ARRAY(DataTypes.STRING) },
  color: { type: DataTypes.STRING },
  colorsAvailable: { type: DataTypes.ARRAY(DataTypes.STRING) },
  processor: { type: DataTypes.STRING },
  camer: { type: DataTypes.STRING },
  rm: { type: DataTypes.STRING },
  zoom: { type: DataTypes.STRING },
  year: { type: DataTypes.INTEGER },
  ceil: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  images: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  image: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
});

const Categories = sequelize.define('Categories', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Favourite);
Favourite.belongsTo(User);

Categories.hasMany(Device);
Device.belongsTo(Categories);

module.exports = {
  User,
  Basket,
  Device,
  Categories,
  Favourite,
};
