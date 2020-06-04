// Controlar las rutas y lo que tenemos que realizar con ellas, como  accesar a cada una de esas rutas

const Atendimiento = require ('../models/atendimientos')

module.exports = app =>{
    //get, recibiendo o pidiendo datos del servidor
   app.get('/atendimientos',(req,res) =>{
    Atendimiento.lista(res)
   })
   app.get('/atendimientos/:id',(req,res) => {
       console.log(req.params.id)
       Atendimiento.buscaporId(id,res)
     
   })
    
    //post, enviando datos para el servidor
    app.post('/atendimientos', (req,res) => {
        const atendimiento = req.body

        Atendimiento.adiciona(atendimiento,res)
        
    })

    app.patch('/atendimientos/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        const valores = req.body
        
        Atendimiento.altera(id,valores,res)
    })

    app.delete('/atendimientos/:id',(req,res) =>{
        const id = parseInt(req.params.id)
        Atendimiento.deleta(id,res)
    })

} 

