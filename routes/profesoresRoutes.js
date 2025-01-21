const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({msg:'Consulta profesores'});
})

router.post('/',(req,res)=>{
    res.json({msg:'Ingreso profesores'});
})

router.route("/:id")
    .get((req,res)=>{
        res.json({msg:'Consulta un profesor'});
    })

    .put((req,res)=>{
        res.json({msg:'Actualizacion un profesor'});
    })

    .delete((req,res)=>{
        res.json({msg:'eliminar un profesor'});
    })



module.exports=router;