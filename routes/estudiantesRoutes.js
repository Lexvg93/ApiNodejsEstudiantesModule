const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({msg:'Consulta estudiantes'});
})

router.post('/',(req,res)=>{
    res.json({msg:'Ingreso estudiantes'});
})

router.put('/',(req,res)=>{
    res.json({msg:'Actualizacion estudiantes'});
})

router.delete('/',(req,res)=>{
    res.json({msg:'eliminar estudiantes'});
})

module.exports=router;