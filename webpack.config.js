const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {app:`/src/index.js`},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    // compress: true,
    port: 9000,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    }
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
            minimize: true,
            sources: true
        },

      },
      {

        test: /\.s[ac]ss|css$/i,
        use: [ 
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                esModule: false,
            }
          },
          "css-loader"
          ,"sass-loader"],
      },
      {
        test:  /custom\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'rtlcss-loader',
          'sass-loader'
        ]
      },

      //   img
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator:{
            filename:"./images/[name][ext]",  
          }
      },
      // fonts
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "./fonts/[name][ext]"
        }
      },


    ],
  },


  plugins: [
    new HtmlWebpackPlugin(
        {
            filename:"index.html",
            template:"./src/index.html"        
        }
    ),
    new HtmlWebpackPlugin(
        {
            filename:"login.html",
            template:"./src/login.html"        
        }
    ),
    new HtmlWebpackPlugin(
        {
            filename:"signup.html",
            template:"./src/signup.html"        
        }
    ),
    new HtmlWebpackPlugin(
        {
            filename:"about-us.html",
            template:"./src/about-us.html"      
        }
    ),
    new HtmlWebpackPlugin(
        {
            filename:"egypt.html",
            template:"./src/egypt.html"      
        }
    ),
    new HtmlWebpackPlugin(
        {
            filename:"turkey.html",
            template:"./src/turkey.html"      
        }
    ),
    new HtmlWebpackPlugin(
        {
            filename:"tour.html",
            template:"./src/tour.html"      
        }
    ),
    new MiniCssExtractPlugin({
        filename:"css/style.css",
      }),
    
      new CssMinimizerPlugin(),
      new CleanWebpackPlugin(),


],
};
