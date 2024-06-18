module.exports = () => {
    const Pool = require('pg').Pool
    const pool = new Pool({
        user: 'matheus',
        host: 'localhost',
        database: 'vuttr',
        password: 'password',
        port: 5432,
        })

    const customerWalletsDB = require('../data/tools.json');


    const controller = {};
  
    controller.listTools = (req, res) => res.status(200).json(customerWalletsDB);
  
    return controller;
  }