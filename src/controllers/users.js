const { User } = require('../database/models');

const resourceController = require('../helpers/api/resource');

module.exports = resourceController(User);
