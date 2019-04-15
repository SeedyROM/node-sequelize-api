const { User, Post } = require('../db/models');

const resourceController = require('../helpers/api/resource');

module.exports = resourceController(Post, {
  include: [User],
});
