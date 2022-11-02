'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Devices', [
      {
        'itemId':'apple-iphone-7-32gb-silver',
        'phoneId': 'apple-iphone-7-32gb-silver',
        'namespaceId': 'apple-iphone-7',
        'name': 'Apple iPhone 7 32GB Silver',
        'capacityAvailable': ['32GB'],
        'capacity': '32GB',
        'priceRegular': 400,
        'priceDiscount': 375,
        'colorsAvailable': ['black', 'rosegold', 'gold', 'silver'],
        'color': 'silver',
        'images': [
          'img/phones/apple-iphone-7/silver/00.jpg',
          'img/phones/apple-iphone-7/silver/01.jpg',
          'img/phones/apple-iphone-7/silver/02.jpg',
          'img/phones/apple-iphone-7/silver/03.jpg',
          'img/phones/apple-iphone-7/silver/04.jpg'
        ],
        'screen': '4.7\' IPS',
        'resolution': '1334x750',
        'processor': 'Apple A10',
        'ram': '2GB',
        'camera': '12 Mp + 7 Mp',
        'zoom': 'Digital, 5x',
        'cell': ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
        category: 'phones',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Devices', null, {});
  },
};

