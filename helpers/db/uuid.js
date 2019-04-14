const uuid = require('uuid/v4');
const { DataTypes } = require('sequelize');

const uuidPrimaryKey = () => ({
  allowNull: true,
  primaryKey: true,
  type: DataTypes.UUID,
  defaultValue: () => uuid(),
});

module.exports = uuidPrimaryKey;
