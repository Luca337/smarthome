const express = require("express");

const app = express();

//Incluir os controllers
const lampadas = require('./controller/lampada');

//Criar as rotas
app.use('/', lampadas);


app.listen(8080, () => {
    console.log("Servidor criado na porta 8080: http://localhost:8080");
});