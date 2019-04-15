const { User, Post } = require('../database/models');

const resourceController = require('../helpers/api/resource');

module.exports = resourceController(Post, {
  include: [User],
});
