const express = require('express');

const restRoutes = (ModelController) => {
  const router = express.Router();

  // List
  router.get('/', async (req, res) => {
    const payload = await ModelController.fetchAll();
    res.send(payload);
  });

  // Retrieve
  router.get('/:id', async (req, res) => {
    const payload = await ModelController.fetch(req.params.id);

    if (payload) {
      res.send(payload);
    } else {
      res.status(404).send('Not found');
    }
  });

  // Create
  router.post('/', async (req, res) => {
    try {
      const payload = await ModelController.create(req.body);
      res.send(payload);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  // Update
  router.patch('/:id', async (req, res) => {
    try {
      const payload = await ModelController.update(req.params.id, req.body);
      res.send(payload);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  // Delete
  router.delete('/:id', async (req, res) => {
    try {
      await ModelController.delete(req.params.id);
      res.send('Resource delted');
    } catch (e) {
      res.status(404).send(e);
    }
  });

  return router;
};

module.exports = restRoutes;
