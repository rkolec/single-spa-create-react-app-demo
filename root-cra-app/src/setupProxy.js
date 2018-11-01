const proxy = require('http-proxy-middleware');

const setupProxy = (app) => {
  app.use(proxy('/child-cra-app', { target: 'http://localhost:3001' }));
};

module.exports = setupProxy;
