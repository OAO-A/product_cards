'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Devices', [
      {
        itemId: 'apple-iphone-7-32gb-black',
        namespaceId: 'apple-iphone-7',
        name: 'Apple iPhone 7 32GB Black',
        capacityAvailable: ['32GB'],
        capacity: '32GB',
        priceRegular: 400,
        priceDiscount: 375,
        colorsAvailable: ['black', 'rosegold', 'gold', 'silver'],
        color: 'black',
        images: [
          'img/phones/apple-iphone-7/black/00.jpg',
          'img/phones/apple-iphone-7/black/01.jpg',
          'img/phones/apple-iphone-7/black/02.jpg',
          'img/phones/apple-iphone-7/black/03.jpg',
          'img/phones/apple-iphone-7/black/04.jpg',
        ],
        description: [
          {
            title: 'And then there was Pro',
            text: [
              'A transformative triple-camera system that adds tons of capability without complexity.',
              'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
            ],
          },
          {
            title: 'Camera',
            text: [
              'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
            ],
          },
          {
            title:
              'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
            text: [
              'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
            ],
          },
        ],
        screen: '4.7\' IPS',
        resolution: '1334x750',
        processor: 'Apple A10',
        ram: '2GB',
        camera: '12 Mp + 7 Mp',
        zoom: 'Digital, 5x',
        cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Devices', null, {});
  },
};
