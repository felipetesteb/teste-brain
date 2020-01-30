const db = require('../config/database/conn').pool

module.exports = {
    getAll:()=>{
        return new Promise((resolve,reject)=>{
            const query = {
                text:'SELECT*FROM produtor WHERE ativo',
            }
            db.query(query,(error,result)=>{
                if(error){
                    reject({
                        code:500,
                        error:error.message
                    })
                }else{
                    resolve({
                        code:200,
                        result:result.rows
                    })
                }
            })
        })
    },

    getOne:(id)=>{
        return new Promise((resolve,reject)=>{
            const query = {
                text:'SELECT*FROM produtor WHERE id = $1',
                values:[id]
            }
            db.query(query,(error,result)=>{
                if(error){
                    reject({
                        code:500,
                        error:error.message
                    })
                }else{
                    resolve({
                        code:200,
                        result:result.rows[0]
                    })
                }
            })
        })
    },

    cad:(produtor)=>{
        console.log("cadastrar")
        return new Promise((resolve,reject)=>{
            const query = {
                text:'INSERT INTO produtor(doc,nome,nome_fazenda,cidade,estado,area_total,area_uso,area_reserva,culturas_plantadas,ativo) '.
                concat('VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,true)'),
                values:[produtor.doc,produtor.nome,produtor.nome_fazenda,produtor.cidade,produtor.estado,produtor.area_total,
                    produtor.area_uso,produtor.area_reserva,produtor.culturas]
            }
            db.query(query,(error,result)=>{
                if(error){
                    reject({
                        code:500,
                        error:error.message
                    })
                }else{
                    resolve({
                        code:200,
                        result:true                        
                    })
                }
             })
        })
    },

    edit:(produtor)=>{
        console.log("veio para o edit",produtor)
        return new Promise((resolve,reject)=>{
            const myquery = {
                text:'UPDATE produtor SET doc = $1,nome= $2,nome_fazenda = $3,cidade= $4,estado= $5,area_total= $6,area_uso= $7,area_reserva= $8,culturas_plantadas= $9 WHERE id = $10',
                values:[produtor.doc,produtor.nome,produtor.nome_fazenda,produtor.cidade,produtor.estado,produtor.area_total,
                    produtor.area_uso,produtor.area_reserva,produtor.culturas,parseInt(produtor.id)]
            }
            console.log("query:",myquery)
            db.query(myquery, (error,result)=>{
                if(error){
                    reject({
                        code:500,
                        error:error.message
                    })
                }else{
                    resolve({
                        code:200,
                        result:true
                    })
                }
            })
        })
    },

    delete:(id)=>{
        return new Promise((resolve,reject)=>{
            const query = {
                text:'UPDATE produtor set ativo = false WHERE id = $1',
                values:[id]
            }
            db.query(query,(error,result)=>{
                if(error){
                    reject({
                        code:500,
                        error:error.message
                    })
                }
                else{
                    resolve({
                        code:200,
                        result:true
                    })
                }
            })
        })  
    }
}