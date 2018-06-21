'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Users = new Schema({
    nombre: String,
    email: String,
    password: String
})

module.exports = { Users }