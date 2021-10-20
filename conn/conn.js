const mongoose = require('mongoose');

const password = "q8nLNP95iveKT4W"
const ussername = "db_user"

function Conn (url,user,pass, banco){
    mongoose.connect(`${url}/${banco}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`mongodb+srv://${ussername}:${password}@cluster0.u90bu.mongodb.net/TodolistDatabase?retryWrites=true&w=majority`);
    })
    .catch((err)=> console.log("Erro no mongo", err))
}

module.exports = Conn;