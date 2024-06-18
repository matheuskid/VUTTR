module.exports = app => {
    const controller = require('../controllers/toolsController')();
  
    app.route('/api/v1/vuttr')
      .get(controller.listTools);
  }