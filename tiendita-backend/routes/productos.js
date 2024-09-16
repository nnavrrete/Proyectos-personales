const express = require('express');
const router = express.Router();
const { pool } = require('../db/db');

router.get ('/productos', async (req, res) => {
    try {
    const result = await pool.query('SELECT * FROM products');
    console.log('Received data:', result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error occurred during query:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;