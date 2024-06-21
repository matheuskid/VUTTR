const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./api/routes/toolsRoutes.js']

swaggerAutogen(outputFile, endpointsFiles)