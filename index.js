if(process.env.NODE_ENV!=='production'){require('dotenv').config()}

const express = require('express');
const app = express();
const TarefaRoutes = require('./routes/routers')
const Conn = require('./conn/conn')
const Cors = require('cors')

app.use(express.json())
app.use(Cors())
app.use('/tarefas', TarefaRoutes);





const db_url = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATABASE;


Conn(db_url, db_user, db_pass,db_data)

const port = 3001;

app.listen(process.env.PORT || port, () =>{
    console.log(`App rodando em http://localhost:${port}/`)
})