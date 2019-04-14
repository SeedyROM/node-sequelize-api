module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    link: DataTypes.STRING,
  }, {});
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return Post;
};
