const express = require('express');
const app = express();

const estudiantesRoutes = require('./views/estudiantesRoutes.js')

app.get('/', (req,res)=>{
    res.send('Hola crack');
})
app.use('/estudiantes', estudiantesRoutes);

app.listen(3000,()=>{
    console.log('servidor activo');
});