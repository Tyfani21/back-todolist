const Tarefa = require("./../models/models");

class TarefaService {
    findAll = async () => await Tarefa.find();
    findById = async (id) => await Tarefa.findById(id)
    createTarefa = async (tarefa) => await Tarefa.create(tarefa)
    editarTarefa = async (id, tarefa) => await Tarefa.updateOne({_id:id}, tarefa);
    deleteTarefa = async (id) => await Tarefa.deleteOne({_id:id})
}

module.exports = TarefaService;