const express     =  require('express');
const bodyParser  =  require('body-parser');
const config      =  require('config');
const swaggerUi   =  require('swagger-ui-express')
const swaggerFile =  require('../swagger_output.json')

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

  require('../api/routes/toolsRoutes')(app);

  return app;
};