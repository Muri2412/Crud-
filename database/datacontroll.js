const error  = require('console');

const Client = require('pg').Client;

const conecction = new Client({
    user: "postgres",
    password:"senha",
    host:"localhost",
    port:5432,
    database:"hospital"
});

conecction.connect((error)=>{
    if (error){
        console.error('[ERRO] Falha na conexão '+error);
         return;
    }
    console.log("Conectado com sucesso")
});

module.exports = conecction;