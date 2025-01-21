class ProfesoresController{
    constructor(){}

    consultar(req,res) {
        res.json({msg:'Consulta profesores'});
    }
    
    ingresar(req,res){
        res.json({msg:'Ingreso profesores'});
    }

    consultarDetalle(req,res){
        res.json({msg:'Consulta un profesor'});
    }

    actualizar(req,res){
        res.json({msg:'Actualizacion un profesor'});
    }

    borrar(req,res){
        res.json({msg:'eliminar un profesor'});
    }
}

module.exports = new ProfesoresController();