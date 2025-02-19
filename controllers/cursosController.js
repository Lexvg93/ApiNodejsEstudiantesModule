const db = require('../database/conexion.js');

class CursosController{
    constructor(){}

    consultar(req,res) {
        res.json({msg:'Consulta cursos'});
    }
    
    ingresar(req,res){
        res.json({msg:'Ingreso cursos'});
    }

    consultarDetalle(req,res){
        const {id} = req.params;
        res.json({msg:`Consulta un curso ${id}`});
    }

    actualizar(req,res){
        res.json({msg:'Actualizacion un curso'});
    }

    borrar(req,res){
        res.json({msg:'eliminar un curso'});
    }
}

module.exports = new CursosController();