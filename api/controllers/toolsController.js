module.exports = () => {
    const Pool = require('pg').Pool
    const pool = new Pool({
        user: 'mathe',
        host: 'postgresDB',
        database: 'vuttr',
        password: 'password',
        port: 5432,
        })


    const controller = {};
  
    controller.listTools = (req, res) => {
      // #swagger.tags = ['Tools']
      // #swagger.description = 'Endpoint para obter as ferramentas.'

      /* #swagger.parameters['tag'] = {
	        in: 'query',
          description: 'Um tag qualquer.',
          type: 'string'
        } */

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
          /* #swagger.responses[200] = { 
              schema: { $ref: "#/definitions/Tools" },
              description: 'Ferramenta(s) encontradas.' 
          } */
        });
      }
    }

    controller.saveTool = (req, res) => {
      // #swagger.tags = ['Tools']
      // #swagger.description = 'Endpoint para adicionar uma ferramenta.'

      /* #swagger.parameters['newTool'] = {
               in: 'body',
               description: 'Informações da ferramenta',
               required: true,
               schema: { $ref: "#/definitions/AddTool" }
        } */

      pool.query('INSERT INTO tools (title, link, description, tags) VALUES ($1, $2, $3, $4) RETURNING *;', 
      [req.body.title, req.body.link, req.body.description, req.body.tags],
      (error, results) => {
        if (error) {
          throw error;
        }
        // #swagger.responses[201] = { description: 'Ferramenta registrada com sucesso!' }
        res.status(201).json(results.rows[0]);
      });
    }

    controller.deleteTool = (req, res) => {
      // #swagger.tags = ['Tools']
      // #swagger.description = 'Endpoint para remover uma ferramenta'
      // #swagger.parameters['id'] = { description: 'ID da ferramenta' }
      pool.query('DELETE FROM tools WHERE id = $1;', 
      [req.params.id],
      (error, results) => {
        if (error) {
          throw error;
        }
         /* #swagger.responses[200] = {description: 'Ferramenta removida.'} */
        res.status(200).json(results.rows);
      });
    }
  
    return controller;
  }