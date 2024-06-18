require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const routes = require('./routes/routes.js')

app.use(express.static('public'))
app.use('/', routes)

app.listen(process.env.PORT, ()=> {
    console.log(`Está rodando esta merda :) PORTA: ${process.env.PORT}`)
})