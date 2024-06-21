module.exports = app => {
    const controller = require('../controllers/toolsController')();
  
    app.route('/vuttr/tools')
      .get(controller.listTools)
      .post(controller.saveTool);

    app.route('/vuttr/tools/:id')
      .delete(controller.deleteTool)
  }