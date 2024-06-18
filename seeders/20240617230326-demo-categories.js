'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Ação',
        description: 'Jogos de ação são caracterizados por desafios físicos e reflexos rápidos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aventura',
        description: 'Jogos de aventura focam em exploração e narrativa.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RPG',
        description: 'Jogos de RPG envolvem criação de personagens e desenvolvimento de habilidades.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Adicione mais categorias conforme necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remova todos os dados inseridos pela seeder
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
