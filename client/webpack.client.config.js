const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // or 'development'
  entry: './src/index.tsx', // Entry point of your React application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Public path for assets in the output directory
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript and TypeScript files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'], // Presets for babel-loader
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader', // Use file-loader to handle image files
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Output path for images in the output directory
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true, // Enable history API fallback to support react-router
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template file
      filename: 'index.html', // Output HTML file
    }),
  ],
};
