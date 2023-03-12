const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

router.get('/', IndexController.index)

router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// listar
router.get('/list', CustomersController.list)

// página de edição
router.get('/edit', CustomersController.formEdit)

// atualizar a edição
router.post('/edit/:id', CustomersController.edit)

// remover usuário
router.get('/remove/:id', CustomersController.remove)

module.exports = router 