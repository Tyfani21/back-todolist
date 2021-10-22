const express = require('express')
const TarefaController = require('./../controllers/controllers')

const router = express.Router();
const tarefaController = new TarefaController;


router.get('/', tarefaController.getTarefa)
router.get('/view/:id', tarefaController.getTarefasById)
router.post('/add', tarefaController.createTarefa)
router.put('/edit/:id', tarefaController.editarTarefa)
router.delete('/delete/:id', tarefaController.deteleTarefa)

module.exports = router;