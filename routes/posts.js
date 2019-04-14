const express = require('express');
const PostController = require('../controllers/posts');

const router = express.Router();

router.get('/', async (req, res) => {
  const payload = await PostController.fetchAll();
  res.send(payload);
});
router.get('/:id', async (req, res) => {
  const payload = await PostController.fetch(req.params.id);
  if (payload) {
    res.send(payload);
  } else {
    res.status(404).send({ message: 'resource not found' });
  }
});

module.exports = router;
