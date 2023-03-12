const mongoose = require('mongoose')

// Definindo o SCHEMA, a tabela do bd
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

// Criando o modelo do bd modelo MVC
const Model = mongoose.model('customers', schema)

// instânciando o modelo do bd
// const register = new Model({
//     name: 'Tomé Luan',
//     age: 30,
//     email: 'tomeluan@gmail.com',
//     password: '123456'
// })

// salvando instância do bd
// register.save()

module.exports = Model