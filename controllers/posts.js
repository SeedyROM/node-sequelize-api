const { User, Post } = require('../models');

const restController = require('../helpers/api/rest');

module.exports = restController(Post, [User]);
