const express = require('express');
const pool = require('../db');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const promisePool = pool.promise();
  const [ rows, fields ] = await promisePool.query('SELECT * FROM t');
  return res.json(rows);
});

router.get('/save', async (req, res) => {
  const { name } = req.query;

  const promisePool = pool.promise();
  const [ rows, fields ] = await promisePool.query('INSERT INTO t (name) VALUES(?)', [name]);

  return res.json(rows);
})

router.get('/env', (req, res) => {
  return res.json({
    DB_HOST: process.env.DB_HOST,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USER: process.env.DB_USER,
    DB_DATABASE: process.env.DB_DATABASE,
  });
})

module.exports = router;
