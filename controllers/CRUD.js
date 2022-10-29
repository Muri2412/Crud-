const { error } = require('console');
const conecction = require('../database/datacontroll');

exports.save = (req, res)=>{
    const pacientenome = req.body.pacientenome;
    const consulta = req.body.consulta;
    const data = req.body.data;
conecction.query(
    'INSERT INTO user(id, pacientenome, consulta, data) VALUES($1, $2, $3, $4)',
    [GeradorDeId(pacientenome, consulta, data), pacientenome, consulta, data],
    (error, results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);
            res.redirect('/')
        }
    })
};
exports.update = (req,res)=>{
    const id = req.body.id;
    const pacientenome = req.body.pacientenome;
    const consulta = req.body.consulta;
    const data = req.body.data;
    conecction.query(
        'UPDATE user SET pacientenome=$1, consulta=$2, data=$3, id=$4 WHERE id=$4',
        [pacientenome, consulta, data, id],
        function (error) {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/');
            }
        })
};

function GeradorDeId(pacientenome, consulta, data){
    return Number(pacientenome.toString().length) + Number(consulta.toString().length)+ Number(data.toString().length)
}