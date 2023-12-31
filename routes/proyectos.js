const express = require('express');

const router = express.Router();

const proyectosController = require('../controllers/proyectos');

router.get('/get-all', proyectosController.getProyectos);

router.post('/post-proyecto', proyectosController.createProyecto);

router.post('/get-proyecto', proyectosController.getProyecto);

router.get('/get-all-estatus', proyectosController.getProyectoByEstatus);

router.get('/get-proyectoByName', proyectosController.getProyectoByName);

router.post('/post-edit-proyecto', proyectosController.postEditProyecto);

router.post('/delete-proyecto', proyectosController.postDeleteProyecto);


module.exports = router;