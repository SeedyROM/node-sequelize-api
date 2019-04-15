const uuidPrimaryKey = require('../../helpers/database/uuid');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Posts', {
    id: uuidPrimaryKey(),
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.STRING,
    },
    link: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    UserId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('Posts'),
};
