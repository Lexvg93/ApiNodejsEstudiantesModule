class EstudiantesController{
    constructor(){}

    consultar(req,res) {
        res.json({msg:'Consulta estudiantes'});
    }
    
    ingresar(req,res){
        res.json({msg:'Ingreso estudiantes'});
    }

    consultarDetalle(req,res){
        res.json({msg:'Consulta un estudiante'});
    }

    actualizar(req,res){
        res.json({msg:'Actualizacion un estudiante'});
    }

    borrar(req,res){
        res.json({msg:'eliminar un estudiante'});
    }
}

module.exports = new EstudiantesController();