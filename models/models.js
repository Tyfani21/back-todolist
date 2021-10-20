const mongoose = require('mongoose');

const tarefaModel = new mongoose.Schema({
    tarefa : {type: String, required: true},
    data : {type: Date, required: true},
    cor:{ type: String}
})

const Tarefa = mongoose.model("tarefa", tarefaModel);
module.exports = Tarefa;