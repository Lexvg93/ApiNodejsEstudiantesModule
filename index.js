const express = require('express');
const app = express();

const estudiantesRoutes = require('./routes/estudiantesRoutes.js')
const profesoresRoutes = require('./routes/profesoresRoutes.js')

app.get('/', (req,res)=>{
    res.send('Hola crack');
})
app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);


app.listen(3000,()=>{
    console.log('servidor activo');
});