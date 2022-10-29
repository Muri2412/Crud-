const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', require('./roteador'));

app.listen(5000, ()=>{
    console.log('SERVER rodando em http://localhost:5000')
})
