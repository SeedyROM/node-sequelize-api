const { User } = require('../db/models');

const resourceController = require('../helpers/api/resource');

module.exports = resourceController(User);
