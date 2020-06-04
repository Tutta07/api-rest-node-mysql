 // La responsabilidad del index es subir el servidor al aire
 const customsExpress = require('./config/customsExpress')
 const conexao = require('./infraestrutura/conexao')
 const Tabelas = require('./infraestrutura/tabelas')

 conexao.connect(erro =>{
      if(erro){
          console.log(erro)
      } else{
          console.log('conectado com sucesso')
          Tabelas.init(conexao)

          const app = customsExpress()
          app.listen(3000, ()=> console.log('Servidor rodando en la puerta 3000'))
      }
    })


    

