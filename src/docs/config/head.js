//routes
import { playersRouter } from "../routes/players.js";
//schemas



// Função para definir as URLs do servidor dependendo do ambiente
const getServersInCorrectOrder = () => {
  const devUrl = { url: process.env.SWAGGER_DEV_URL || 'http://localhost:3000' };
  const prodUrl = 'https://banco-imobiliario-api.vercel.app' 

  if (process.env.NODE_ENV === 'production') return [prodUrl, devUrl];
  else return [devUrl, prodUrl];
};

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
      servers: getServersInCorrectOrder(),
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
