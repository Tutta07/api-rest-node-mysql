//La responsabilidad de customsEXpress es configurar cualquier cosa que necesitemos
//despues de instalar el body-parser, aqui vamos a configurar la forma de como leer req.body del metodo post.o sea como podemos leer lo que el usuario envia mediante formulario.
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')


module.exports= () =>{   //module.exports= () =>{} codigo para exportar una funcion, el nombre dela funcion va dentro del parentesis
  const app= express()
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  consign()
    .include('controllers')
    .into(app)

  return app
}              

