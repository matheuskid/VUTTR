module.exports = () => {
    const Pool = require('pg').Pool
    const pool = new Pool({
        user: 'matheus',
        host: 'localhost',
        database: 'vuttr',
        password: 'password',
        port: 5432,
        })


    const controller = {};
  
    controller.listTools = (req, res) => pool.query('SELECT * FROM tools ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      });
  
    return controller;
  }