const cors = require('cors')
const helmet = require('helmet')
const express = require('express')

module.exports = (app)=>{
    app.use(express.urlencoded({limit:'1mb',extended:false}))
    app.use(express.json({limit:'1mb'}))
    app.use(cors())
    app.use(helmet())
}