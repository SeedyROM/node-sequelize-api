const uuidPrimaryKey = require('../../helpers/db/uuid');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: uuidPrimaryKey(),
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
    scopes: {
      withPassword: {
        attributes: { },
      },
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Post);
  };
  return User;
};
