require("dotenv").config();

const app = require('./config/express')();
const port = app.get('port');

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`)
});