'use strict';

const path = require('path');

module.exports = {
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: 'My api',
      version: '1.0.0',
    },
  },
  apis: [path.join(__dirname, 'index.js')]
};