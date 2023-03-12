function connect() {
  // conectando ao mongoose
  const mongoose = require("mongoose");

  // conectar a aplicação com o banco de dados
  mongoose.connect("mongodb://localhost:27017/segundo_projeto");
  const db = mongoose.connection;

  // quando conectar o servidor, dar a mensagem que deu certo
  db.once("open", () => {
    console.log("Connected to database");
  });

  // caso a conexão falhe, ele retorna esse erro
  db.on("error", console.error.bind(console, "connection error: "));
}

module.exports = {
    connect
}