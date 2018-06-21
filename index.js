'use strict'

const express = require('express')
const Parser = require('body-parser')
const hbs = require('express-handlebars')

const Api = require('./middlewares/rutas')
const Db = require('./controles/mongodb')


const app = express()

app.use(Parser.urlencoded({ extended: false }))
app.use(Parser.json())

app.use('/api/', Api)

Db().then(res => console.log(res))

//configurarmpos hadelbars

app.engine('hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
    }));
    
app.set('view engine', '.hbs')



app.listen(3000, () => console.log(`El servidor se esta ejecutando en el puerto 3000 `))