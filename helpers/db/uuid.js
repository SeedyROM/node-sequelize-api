const uuid = require('uuid/v4');
const Sequelize = require('sequelize');

const uuidPrimaryKey = () => ({
  allowNull: false,
  primaryKey: true,
  type: Sequelize.UUID,
  defaultValue: () => uuid(),
});

module.exports = uuidPrimaryKey;
