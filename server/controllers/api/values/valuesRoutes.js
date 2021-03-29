const router = require('express').Router();
const { pgClient } = require('../../../config/connection');
const { redisClient, redisPublisher } = require('../../../config/redis');

router.get('/all', async (req, res) => {
  try {
    const { rows } = await pgClient.query('SELECT * FROM values');
    res.status(200).send(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/current', async (req, res) => {
  try {
    redisClient.hgetall('values', (err, values) => {
      res.status(200).send(values);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const index = req.body.index;

    if (parseInt(index) > 40) {
      return res.status(422).send('Index too high!');
    }

    redisClient.hset('values', index, 'Nothing yet!');
    redisPublisher.publish('insert', index);
    pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

    res.status(200).send({ working: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
