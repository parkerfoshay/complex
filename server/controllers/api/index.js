const router = require('express').Router();

const valuesRoutes = require('./values');


router.use('/values', valuesRoutes);

module.exports = router;