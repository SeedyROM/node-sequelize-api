const restRoutes = require('../helpers/api/rest');
const PostController = require('../controllers/posts');

const routes = restRoutes(PostController);
module.exports = routes;
