const produtorRep = require('../model/produtor')

module.exports = {
    getAll:(req,res)=>{
        produtorRep.getAll().then((value)=>{
            res.send(JSON.stringify(value))
        }).catch((error)=>{
            res.send(JSON.stringify(error))
        })
    },
    getOne:(req,res)=>{
        produtorRep.getOne(req.params.id).then((value)=>{
            res.send(JSON.stringify(value))
        }).catch((error)=>{
            res.send(JSON.stringify(error))
        })
    },
    cad:(req,res)=>{
        console.log(req.body)
        console.log("veio para o cad")
        produtorRep.cad(req.body).then((value)=>{
            res.send(JSON.stringify(value))
        }).catch((error=>{
            res.send(JSON.stringify(error))
        }))
    },
    edit:(req,res)=>{
        produtorRep.edit(req.body).then((value)=>{
            res.send(JSON.stringify(value))
        }).catch((error)=>{
            res.send(JSON.stringify(error))
        })
    },
    delete:(req,res)=>{
        produtorRep.delete(req.params.id).then((value)=>{
            res.send(JSON.stringify(value))
        }).catch((error)=>{
            res.send(JSON.stringify(error))
        })
    }
}