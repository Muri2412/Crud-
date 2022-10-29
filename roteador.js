const express = require('express');
const router = express.Router();

const conecction = require('./database/datacontroll')

router.get('/', (req,res)=>{
    conecction.query('SELECT * FROM Hospital', (error, results)=>{
        if(error){
            throw error;
        } else {
            res.render('index', {results:results.rows});
        }
    })
})

router.get('/create', (req,res)=>{
    res.render('create');
})
router.get('/edit/:id', (req,res)=>{
    const id = req.params.id;
    conecction.query('SELECT * FROM Hospital WHERE id=$1',[id], (error,results)=>{
        if(error){
            throw error;
        } else{
            res.render('edit', {pacientenome:results.row[0]});
        }
    });
});
router.get('/contato', (req,res)=>{
    res.render('contato');
})
const crud = require('./controllers/CRUD');

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;