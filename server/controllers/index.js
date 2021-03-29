const router = require('express').Router();

const apiRoutes = require('./api');

router.get('/', async (req, res) => {
    try {
      res.send("Hi")
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.use('/api', apiRoutes);

module.exports = router;