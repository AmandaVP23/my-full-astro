import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Astro API',
      version: '1.0.0',
      description: 'API documentation for my Astro application',
    },
    servers: [
      {
        url: 'http://localhost:4321',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/pages/api/**/*.ts'], // Path to your API routes
};

export const swaggerSpec = swaggerJsdoc(options);