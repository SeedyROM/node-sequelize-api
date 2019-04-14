const { User } = require('../models');

const resourceController = require('../helpers/api/rest');

module.exports = resourceController(User);
