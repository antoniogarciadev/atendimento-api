// import express from 'express';
const express = require('express');
const app = express();
const port = 5000;
const servername = '/atendimentos';
const router = require('./routes/index');
const conn = require('./src/infra/conection');
const tabelas = require('./src/infra/tabelas');


app.use(express.json());
app.use(express.urlencoded({extends: true}));

// tabelas.init(conn);

router(app);

app.listen(port, (error) => {
    if(error){
        console.log('Ocorreu um erro:', error);
        return;
    }
    console.log("Server is running in port http://localhost:"+ port + servername)
});