module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Task);
  };
  return User;
};
