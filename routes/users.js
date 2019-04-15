const restRoutes = require('../helpers/api/rest');
const UserController = require('../controllers/users');

const routes = restRoutes(UserController);
module.exports = routes;
