const { User } = require('../models');

const resourceController = require('../helpers/api/resource');

module.exports = resourceController(User);
