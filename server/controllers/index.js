const router = require('express').Router();

const apiRoutes = require('./api/values/valuesRoutes');

router.get('/', async (req, res) => {
    try {
      res.send("Hi")
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.use('/values', apiRoutes);

module.exports = router;