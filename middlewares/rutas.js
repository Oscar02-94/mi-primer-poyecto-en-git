'use strict'
const Router = require('express').Router()
const bcrypt = require('bcrypt-nodejs')

const { Users } = require('../models/schemas')



Router.get('/login', (req, res) => {
   
    res.render('login')
})


Router.post('/login', (sol, res) => {
   
    const{ email, password} = sol.body
    
    Users.findOne({ email })
    .then(resolt => {
       if(resolt !==null) {
            bcrypt.compare(password, result.password, (err, respnse) => {
                if(err) throw err

                if(response === true) {
                return res.joson({
                    message: 'el usuario se ha logeado'
                })
            }
            return res.json({
                message: 'La contraseña es incorrecta'
            })

            })
        } else{
            return res.joson({
                message: 'El correo no existe'
            })
        }

    })
    .catch(err => {
        return res.json(err)
    })

})

Router.post('/register', (sol, res) => {

    const{nombre, email, password} = sol.body
    
    bcrypt.genSalt(10, (er, salt) => {
       
        if (er) throw er

        bcrypt.hash(password, salt, null, (err, hash) => {
            if(err) throw err

            Users.create({
                nombre,
                email,
                password: hash

            }).then( r => res.json(r))
            .catch(error => {
                return res.json(error)
            })

        })
    })
})

module.exports = Router