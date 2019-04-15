const uuidPrimaryKey = require('../../helpers/database/uuid');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: uuidPrimaryKey(),
    username: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
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
