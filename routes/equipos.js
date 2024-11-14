const express = require('express');
const router = express.Router();
const equipoModel = require('../models/Equipo');

// Ruta para obtener todos los equipos
router.get('/', async (req, res) => {
  try {
    const equipos = await equipoModel.getEquipos();
    res.json(equipos);
  } catch (err) {
    res.status(500).send('Error al obtener los equipos');
  }
});

module.exports = router;
