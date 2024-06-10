const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        use: "file-loader",
        include: path.resolve(__dirname, 'node_modules/aliceonboarding')
      }
    ]
  }
};
