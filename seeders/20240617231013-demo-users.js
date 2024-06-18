'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Remove todos os registros existentes na tabela Users
    await queryInterface.bulkDelete('Users', null, {});

    // Insere novos registros na tabela Users
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        password: 'password456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Adicione mais usuários conforme necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove todos os registros inseridos pelo seeder
    await queryInterface.bulkDelete('Users', null, {});
  }
};
