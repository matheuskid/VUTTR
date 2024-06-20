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
  
    controller.listTools = (req, res) => {
      if (req.query.tag) {
        pool.query('SELECT * FROM tools WHERE $1 = ANY(tags);', [req.query.tag], (error, results) => {
          if (error) {
            throw error;
          }
          res.status(200).json(results.rows);
        });
      } else {
        pool.query('SELECT * FROM tools ORDER BY id ASC;', (error, results) => {
          if (error) {
            throw error;
          }
          res.status(200).json(results.rows);
        });
      }
    }

    controller.saveTool = (req, res) => {
      pool.query('INSERT INTO tools (title, link, description, tags) VALUES ($1, $2, $3, $4) RETURNING *;', 
      [req.body.title, req.body.link, req.body.description, req.body.tags],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).json(results.rows[0]);
      });
    }
  
    return controller;
  }