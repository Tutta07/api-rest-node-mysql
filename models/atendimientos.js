// envia los datos a la base de datos, toda la parte de conexion
const moment = require('moment')
 const conexao = require('../infraestrutura/conexao')
 class Atendimiento{
    adiciona(atendimiento,res){
       const FechaCreacion = moment().format('YYYY-MM-DD HH:MM:SS')
       const Fecha = moment(atendimiento.Fecha,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
       const fechaeValida = moment(Fecha).isSameOrAfter(FechaCreacion)
       const clienteeValido = atendimiento.cliente.length >=5

       const validaciones = [
           {
               nome:'Fecha',
               valido:fechaeValida,
               mensagem: 'Fecha tiene que ser igual o mayor a la data actual'
           },
       ]
       const atendimientoconfecha = {...atendimiento,FechaCreacion,Fecha} 
       const sql = 'INSERT INTO Atendimientos SET ?'

       conexao.query(sql,atendimientoconfecha,(erro, resultados) => {
           if(erro){
               res.status(400).json(erro)
           }
           else {
               res.status(201).json(resultados)
           }
       })
    }
    lista(res){
        const sql = 'SELECT * FROM Atendimientos'

        conexao.query(sql,(erro,resultados)=> {
            if(erro){
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(resultados)
            }
        })
    }
    buscaporId(id,res){
        const sql = `SELECT * FROM Atendimientos WHERE id=${id}`
        conexao.query(sql,(erro,resultados) =>{
            const atendimiento = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(atendimiento)
            }
        })

    }

    altera(id,valores,res){
        if(valores.Fecha){
            valores.Fecha = moment(valores.Fecha,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
       const sql = 'UPDATE Atendimientos set ?  where id=?'

       conexao.query(sql,[valores,id],(erro,resultados)=>{
           if(erro){
               res.status(400).json(erro)
           }
           else{
               res.status(200).json({...valores,id})
           }
       })
    }

    deleta(id,res){
        const sql = 'DELETE FROM Atendimientos WHERE id=?'

        conexao.query(sql,id,(erro,resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(id)
            }
        })
    }
}
module.exports = new Atendimiento