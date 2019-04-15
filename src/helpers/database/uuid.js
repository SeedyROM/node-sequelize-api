const { DataTypes } = require('sequelize');

const uuidPrimaryKey = () => ({
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true,
});

module.exports = uuidPrimaryKey;
