const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({msg:'Consulta estudiantes'});
})

router.post('/',(req,res)=>{
    res.json({msg:'Ingreso estudiantes'});
})

router.route("/:id")
    .get((req,res)=>{
        res.json({msg:'Consulta un estudiante'});
    })

    .put((req,res)=>{
        res.json({msg:'Actualizacion estudiantes'});
    })

    .delete((req,res)=>{
        res.json({msg:'eliminar estudiantes'});
    })



module.exports=router;