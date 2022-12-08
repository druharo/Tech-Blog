'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Comments', [
      {
        comment: 'Denis file',
        user_id: 1,
        article_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        comment: 'another file',
        user_id: 1,
        article_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        comment: 'third file',
        user_id: 1,
        article_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', null, {});

  }
};
