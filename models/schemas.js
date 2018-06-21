'use strict'

const mongoose = require('mongoose')

const Users = require('./schemas/user')

module.exports = {
    Users: mongoose.model('Users', Users)
}