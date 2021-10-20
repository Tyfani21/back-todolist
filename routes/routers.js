const express = require('express')
const TarefaController = require('./../controllers/controllers')

const router = express.Router();
const tarefaController = new TarefaController;


router.get('/', tarefaController.getTarefa)
router.get('/:id', tarefaController.getTarefasById)
router.post('/', tarefaController.createTarefa)
router.put('/:id', tarefaController.editarTarefa)
router.delete('/:id', tarefaController.deteleTarefa)

module.exports = router;