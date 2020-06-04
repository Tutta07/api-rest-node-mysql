class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarAtendimientos()
    }
    criarAtendimientos(){
        const sql = 'CREATE TABLE IF NOT EXIST Atendimientos (id int NOT NULL  AUTO_INCREMENT,cliente varchar (50) NOT NULL, pet varchar(20),servicio varchar (20) NOT NULL, Fecha date,FechaCreacion date, status varchar (20) NOT NULL, observacoes text ,PRIMARY KEY(id))'
        this.conexao.query(sql,(erro)=> {
            if(erro){
                console.log(erro)
            }
            else {
                console.log('Tabela creada con suceso')
            }
        })
    }
}
module.exports = new Tabelas 