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

const Device = sequelize.define('device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category: { type: DataTypes.STRING, allowNull: false },
  phoneId: { type: DataTypes.STRING, unique: true, allowNull: false },
  itemId: { type: DataTypes.STRING, unique: true, allowNull: false },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  fullPrice: { type: DataTypes.INTEGER },
  price: { type: DataTypes.INTEGER, allowNull: false },
  screen: { type: DataTypes.STRING },
  capacity: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
  rm: { type: DataTypes.STRING },
  year: { type: DataTypes.INTEGER },
  image: { type: DataTypes.STRING, allowNull: false },
});

const DeviceInfo = sequelize.define('device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category: { type: DataTypes.STRING, allowNull: false },
  phoneId: { type: DataTypes.STRING, unique: true, allowNull: false },
  itemId: { type: DataTypes.STRING, unique: true, allowNull: false },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  fullPrice: { type: DataTypes.INTEGER },
  price: { type: DataTypes.INTEGER, allowNull: false },
  screen: { type: DataTypes.STRING },
  capacity: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
  rm: { type: DataTypes.STRING },
  year: { type: DataTypes.INTEGER },
  image: { type: DataTypes.STRING, allowNull: false },
});

// {
//   "id": "1",
//   "category": "phones",
//   "phoneId": "apple-iphone-7-32gb-black",
//   "itemId": "apple-iphone-7-32gb-black",
//   "name": "Apple iPhone 7 32GB Black",
//   "fullPrice": 400,
//   "price": 375,
//   "screen": "4.7' IPS",
//   "capacity": "32GB",
//   "color": "black",
//   "ram": "2GB",
//   "year": 2016,
//   "image": "img/phones/apple-iphone-7/black/00.jpg"
// },
