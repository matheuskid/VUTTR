const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./api/routes/toolsRoutes.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "VUTTR API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Tools",
            "description": "Endpoints"
        }
    ],
    definitions: {
        Tools: {
            id: 0,
            $title: "Notion",
            $link: "https://notion.so",
            $description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
            $tags: [
                "organization",
                "planning",
                "collaboration",
                "writing",
                "calendar"
            ]
        },
        AddTool: {
            $title: "hotel",
            $link: "https://github.com/typicode/hotel",
            $description: "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
            $tags: ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
        }
    }
}


swaggerAutogen(outputFile, endpointsFiles, doc)