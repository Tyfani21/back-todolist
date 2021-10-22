const mongoose = require('mongoose');
const TarefasService = require('./../services/services');

const tarefasService = new TarefasService();

class TarefaController {
    getTarefa = async (req, res) => {
        const tarefas = await tarefasService.findAll();
        res.send(tarefas);
    }

    getTarefasById = async (req, res) =>{
        const id = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(403).send("Id inválido");
        }
        const tarefa = await tarefasService.findById(id);
        if(!tarefa){ res.status(404).send('Tarefa não encontrada')}
        res.status(200).send(tarefa);
    }

    createTarefa = async (req,res) =>{
        const tarefa = req.body;
        await tarefasService.createTarefa(tarefa).then(()=>{
            res.send({message:`Tarefa adicionada com sucesso`})
        })
        .catch((err) => res.status(500).send({error:`Erro no servidor: ${err}`}))
    }
    editarTarefa = async (req, res) => {
        const id = req.params.id;
        const tarefa = req.body;
        await tarefasService.editarTarefa(id, tarefa).then(()=>{
            res.send({message: `Tarefa editada com sucesso`}).status(200);
        }).catch((err)=>res.status(500).send({message:`Erro no servidor ${err}`}))
    } 
    deteleTarefa = async (req, res) => {
        const id = req.params.id;
        await tarefasService.deleteTarefa(id)
        .then(()=> res.status(200).send({message: `Excluido com sucesso`}))
        .catch((err)=> res.status(500).send({message:`Erro no servidor ${err}`}))
    }
}
module.exports = TarefaController
