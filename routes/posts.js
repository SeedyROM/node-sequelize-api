const express = require('express');
const PostController = require('../controllers/posts');

const router = express.Router();

// List
router.get('/', async (req, res) => {
  const payload = await PostController.fetchAll();
  res.send(payload);
});

// Create
router.post('/', async (req, res) => {
  try {
    const payload = await PostController.create(req.body);
    res.send(payload);
  } catch (e) {
    throw e;
  }
});

// Retrieve
router.get('/:id', async (req, res) => {
  const payload = await PostController.fetch(req.params.id);

  if (payload) {
    res.send(payload);
  } else {
    res.status(404).send('Not found');
  }
});

module.exports = router;
