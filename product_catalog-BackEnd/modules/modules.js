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
  name: { type: DataTypes.STRING, unique: true },
  priceRegular: { type: DataTypes.INTEGER },
  priceDiscount: { type: DataTypes.INTEGER},
  description: { type: DataTypes.JSON},
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
  ceil: { type: DataTypes.ARRAY(DataTypes.STRING)},
  images: { type: DataTypes.ARRAY(DataTypes.STRING) },
  image: { type: DataTypes.ARRAY(DataTypes.STRING),}
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Favourite);
Favourite.belongsTo(User);

module.exports = {
  User,
  Basket,
  Device,
  Favourite,
};

// async up(queryInterface, Sequelize) {
//   await queryInterface.createTable('Devices', {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: Sequelize.INTEGER
//     },
//     namespaceId: { type: Sequelize.STRING, allowNull: false },
//     category: { type: Sequelize.STRING, allowNull: false },
//     phoneId: { type: Sequelize.STRING, unique: true, allowNull: false },
//     itemId: { type: Sequelize.STRING, unique: true, allowNull: false },
//     name: { type: Sequelize.STRING, unique: true },
//     priceRegular: { type: Sequelize.INTEGER },
//     priceDiscount: { type: Sequelize.INTEGER},
//     description: { type: Sequelize.JSON},
//     screen: { type: Sequelize.STRING },
//     capacity: { type: Sequelize.STRING },
//     capacityAvailable: { type: Sequelize.ARRAY(Sequelize.STRING) },
//     color: { type: Sequelize.STRING },
//     colorsAvailable: { type: Sequelize.ARRAY(Sequelize.STRING) },
//     processor: { type: Sequelize.STRING },
//     camer: { type: Sequelize.STRING },
//     rm: { type: Sequelize.STRING },
//     zoom: { type: Sequelize.STRING },
//     year: { type: Sequelize.INTEGER },
//     ceil: { type: Sequelize.ARRAY(Sequelize.STRING)},
//     images: { type: Sequelize.ARRAY(Sequelize.STRING) },
//     image: { type: Sequelize.ARRAY(Sequelize.STRING)},
//     createdAt: {
//       allowNull: false,
//       type: Sequelize.DATE
//     },
//     updatedAt: {
//       allowNull: false,
//       type: Sequelize.DATE
//     }
//   });
// },
// async down(queryInterface, Sequelize) {
//   await queryInterface.dropTable('Devices');
// }
// };

// Device.init({
//   namespaceId: DataTypes.STRING,
//   category: DataTypes.STRING,
//   phoneId: DataTypes.STRING,
//   itemId: DataTypes.STRING,
//   name:DataTypes.STRING,
//   priceRegular: DataTypes.INTEGER,
//   priceDiscount: DataTypes.INTEGER,
//   description: DataTypes.JSON,
//   screen: DataTypes.STRING ,
//   capacity: DataTypes.STRING ,
//   capacityAvailable: DataTypes.ARRAY(DataTypes.STRING),
//   color: DataTypes.STRING ,
//   colorsAvailable: DataTypes.ARRAY(DataTypes.STRING),
//   processor: DataTypes.STRING,
//   camer: DataTypes.STRING ,
//   rm: DataTypes.STRING ,
//   zoom: DataTypes.STRING ,
//   year: DataTypes.INTEGER,
//   ceil: DataTypes.ARRAY(DataTypes.STRING),
//   images: DataTypes.ARRAY(DataTypes.STRING),
//   image: DataTypes.ARRAY(DataTypes.STRING),
// }, {
//   sequelize,
//   modelName: 'Device',
// });
// return Device;
// };