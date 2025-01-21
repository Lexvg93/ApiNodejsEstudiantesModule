const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hola crack');
})
app.listen(3000,()=>{
    console.log('servidor activo');
});