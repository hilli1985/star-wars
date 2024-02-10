const path = require('path');

module.exports = {
  target: 'node', // For server-side Node.js environment
  mode: 'production', // or 'development'
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader', // Use ts-loader to transpile TypeScript files
        },
      },
    ],
  },
  // Add any necessary loaders, plugins, etc. for server build
};