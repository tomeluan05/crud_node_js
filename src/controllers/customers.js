const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

function index(req, res){
    res.render('register',{
        title: 'Cadastro de clientes'
    })
}

// recebe os dados digitados pelo usuário
async function add(req, res){
    const{
        name,
        age,
        email,
        password
    } = req.body

    const passwordCrypto = await crypto(password)

    // passa os dados recebidos para o BD
    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto
    })
    
    register.save()
    res.render('register', {
        message: 'Cadastro realizado com sucesso!'
    })
}

async function list(req, res){
    const recebeUsers = await CustomersModel.find()

    res.render('list', {
        title: 'Listagem de usuários',
        // vai usar na listagem no forEach
        users: recebeUsers
    })
}

async function formEdit(req, res){
    const { id } = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Editar usuário',
        user
    })
}

async function edit(req, res){
    const {
        name,
        age,
        email,
    } = req.body

    const { id } = req.params

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: 'Editar usuário',
        user,
        message: 'Usuário alterado com sucesso!'
    })
}

async function remove(req, res){
    const { id } = req.params

    // _id é o ID que está no banco, o segundo é o da const
    const remove = await CustomersModel.deleteOne({ _id: id }, {
        message: 'Usuário deletado com sucesso!'
    })
    
    if(remove){
        res.redirect('/list')
    }
    
}

module.exports = {
    add,
    index,
    list,
    formEdit,
    edit,
    remove
}