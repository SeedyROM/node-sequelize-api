const { User, Post } = require('../models');

const resourceController = require('../helpers/api/resource');

module.exports = resourceController(Post, {
  include: [User],
});
