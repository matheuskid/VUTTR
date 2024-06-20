module.exports = app => {
    const controller = require('../controllers/toolsController')();
  
    app.route('/vuttr/tools')
      .get(controller.listTools)
      .post(controller.saveTool);
  }