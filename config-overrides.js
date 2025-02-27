const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    // Replace deprecated webpack-dev-server options
    if (config.devServer) {
      // Remove deprecated options
      delete config.devServer.onBeforeSetupMiddleware;
      delete config.devServer.onAfterSetupMiddleware;
      
      // Add the new recommended option
      config.devServer.setupMiddlewares = (middlewares, devServer) => {
        // Your custom middleware setup can go here if needed
        return middlewares;
      };
    }
    
    return config;
  }
); 