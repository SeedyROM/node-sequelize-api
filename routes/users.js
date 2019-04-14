const express = require('express');
const UserContoller = require('../controllers/users');

const router = express.Router();

// List
router.get('/', async (req, res) => {
  const payload = await UserContoller.fetchAll();
  res.send(payload);
});

// Create
router.post('/', async (req, res) => {
  try {
    const payload = await UserContoller.create(req.body);
    res.send(payload);
  } catch (e) {
    res.send(e);
  }
});

// Retrieve
router.get('/:id', async (req, res) => {
  const payload = await UserContoller.fetch(req.params.id);

  if (payload) {
    res.send(payload);
  } else {
    res.status(404).send('Not found');
  }
});

module.exports = router;
