const uuidPrimaryKey = require('../helpers/db/uuid');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: uuidPrimaryKey(),
    username: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    password: {
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
  }),
  down: queryInterface => queryInterface.dropTable('Users'),
};
