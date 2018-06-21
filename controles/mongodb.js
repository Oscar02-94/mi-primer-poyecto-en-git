'use strict'
const mongoose = require('mongoose')


mongoose.Promise = global.Promise

module.exports = () => {
    return mongoose.connect('mongodb://localhost:27017/repo')
        .then(data => 'connected!!')
        .catch(err => {
            throw err
        })
}