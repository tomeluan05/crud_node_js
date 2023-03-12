// importa a biblioteca express
const express = require('express')
// importa a biblioteca path
const path = require('path')

const routes = require('./routes')
// importando a conexão com o mongoDB
const db = require('./database')

// executa a biblioteca express
const app = express()


// conexão com o mongoDB
db.connect()


// define o template engine, nesse caso o express
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// usa o midleware para carregar arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// usa o midleware para receber dados via POST (do formulário)
app.use(express.urlencoded({extended: true}))


// ********** ROTAS ***********

app.use('/', routes)



// Midleware para página 404 NOT FOUND
app.use((req, res)=>{
    res.send('404 - Página não encontrada!')
})

// ********** SERVIDOR **********

// Cria a porta que vai rodar o servidor
const PORT = process.env.PORT || 8080

// Starta o servidor
app.listen(PORT, ()=>{
    console.log(`Server listening on PORT ${PORT}`)
})
