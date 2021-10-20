if(process.env.NODE_ENV!=='production'){require('dotenv').config()}
const corsOptions ={
    origin: 'http://localhost:3001',
    optionSucessStatus: 200,
}

const express = require('express');
const app = express();
const TarefaRoutes = require('./routes/routers')
const Conn = require('./conn/conn')
const cors = require('cors')
app.use(cors(corsOptions))

app.use(express.json())
app.use('/tarefas', TarefaRoutes);
app.use(cors())

const db_url = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATABASE;


Conn(db_url, db_user, db_pass,db_data)

const port = 3001;

app.listen(process.env.PORT || port, () =>{
    console.log(`App rodando em http://localhost:${port}/`)
})