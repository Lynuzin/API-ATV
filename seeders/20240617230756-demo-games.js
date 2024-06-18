'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Games', [
      {
        title: 'The Last of Us',
        releaseDate: '2013-06-14',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Legend of Zelda: Breath of the Wild',
        releaseDate: '2017-03-03',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Adicione mais jogos conforme necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remova todos os dados inseridos pela seeder
    await queryInterface.bulkDelete('Games', null, {});
  }
};
