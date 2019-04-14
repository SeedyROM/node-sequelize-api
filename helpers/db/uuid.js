const uuid = require('uuid/v4');
const Sequelize = require('sequelize');

const uuidPrimaryKey = () => ({
  primaryKey: true,
  type: Sequelize.UUID,
  allowNull: false,
  defaultValue: () => uuid(),
});

module.exports = uuidPrimaryKey;
