'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namespaceId: { type: Sequelize.STRING, allowNull: false },
      category: { type: Sequelize.STRING, allowNull: false },
      phoneId: { type: Sequelize.STRING, unique: true, allowNull: false },
      itemId: { type: Sequelize.STRING, unique: true, allowNull: false },
      name: { type: Sequelize.STRING, unique: true },
      priceRegular: { type: Sequelize.INTEGER },
      priceDiscount: { type: Sequelize.INTEGER},
      description: { type: Sequelize.ARRAY(Sequelize.JSON)},
      screen: { type: Sequelize.STRING },
      capacity: { type: Sequelize.STRING },
      capacityAvailable: { type: Sequelize.ARRAY(Sequelize.STRING) },
      color: { type: Sequelize.STRING },
      colorsAvailable: { type: Sequelize.ARRAY(Sequelize.STRING) },
      processor: { type: Sequelize.STRING },
      camera: { type: Sequelize.STRING },
      ram: { type: Sequelize.STRING },
      zoom: { type: Sequelize.STRING },
      year: { type: Sequelize.INTEGER },
      cell: { type: Sequelize.ARRAY(Sequelize.STRING)},
      images: { type: Sequelize.ARRAY(Sequelize.STRING) },
      resolution: { type: Sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Devices');
  }
};