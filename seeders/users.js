'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        email: 'casey@test.com',
        name: 'casey',
        password: 'Helloworld',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'caleb@test.com',
        name: 'caleb',
        password: 'Helloworld',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'jimbo@test.com',
        name: 'jim',
        password: 'Helloword',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})
    console.log("bulkInsert: ", bulkUsers)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};