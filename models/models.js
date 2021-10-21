const mongoose = require('mongoose');

const tarefaModel = new mongoose.Schema({
    titulo:{type:String, required: true},
    data: {type: Date, required: true},
    descricao: {type:String},
    prioridade: {type:String},
    status: {type:String},
    prazo: {type: Date},
    etiqueta: {type: String},
})

const Tarefa = mongoose.model("tarefas", tarefaModel);
module.exports = Tarefa;