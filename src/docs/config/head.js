//routes
import { playersRouter } from "../routes/players.js";
//schemas



// Função para definir as URLs do servidor dependendo do ambiente

const devUrl = process.env.SWAGGER_DEV_URL;
const prodUrl = 'https://banco-imobiliario-api.vercel.app' 

// Função para obter as opções do Swagger
const getSwaggerOptions = () => {
  return {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'API de Gerenciamento de Banco Imobiliário',
        version: '1.0-alpha',
        description: 'Api que gerencia jogadores, bancos, registros de transações',
        contact: {
          name: 'BanckShut',
          email: 'banckshut@gamil.com',
        },
      },
      servers: devUrl ?? prodUrl,
      tags: [
        {
          name: 'Player',
          description: 'Rota para gestão de players'
        },
        {
          name: 'Bank',
          description: 'Rota para gestão de bancos'
        },
        {
          name: "Register",
          description: "Rotas para gestão de registros"
        },
      ],
      paths: {
        ...playersRouter
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        },
        schemas: {
          
        }
      },
      security: [{
        bearerAuth: []
      }]
    },
    apis: ['./src/routes/*.js']
  };
};

export default getSwaggerOptions;
