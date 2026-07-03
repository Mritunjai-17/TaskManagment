const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Task Management API",
            version: "1.0.0",
            description: "REST API for Task Management with JWT Authentication"
        },

        servers: [
            {
                url: "http://localhost:3000/api/v1"
            }
        ],

        components: {

            securitySchemes: {

                bearerAuth: {

                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"

                }

            }

        },

        security: [

            {
                bearerAuth: []
            }

        ]

    },

    apis: ["./src/routes/*.js"]
};
const swaggerSpec = swaggerJsDoc(options);
module.exports = swaggerSpec;