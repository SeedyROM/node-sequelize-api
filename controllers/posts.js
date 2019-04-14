const { User, Post } = require('../models');

const resourceController = require('../helpers/api/rest');

module.exports = resourceController(Post, {
  include: [User],
});
