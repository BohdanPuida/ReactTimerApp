var webpack = require('webpack')

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
],
externals: {
jquery: 'jQuery'

},

plugins: [
 new webpack.ProvidePlugin({

   '$': 'jquery',
   'jQuery':'jquery'
 })

],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'C:/Users/Bogdan/Desktop/ReactTimer/app/components/Main.jsx',

      applicationStyles:'C:/Users/Bogdan/Desktop/ReactTimer/app/styles/app.scss',
      Navigation:'C:/Users/Bogdan/Desktop/ReactTimer/app/components/Navigation.jsx',
      Timer:'C:/Users/Bogdan/Desktop/ReactTimer/app/components/Timer.jsx',
      Countdown:'C:/Users/Bogdan/Desktop/ReactTimer/app/components/Countdown.jsx',
      Clock:'C:/Users/Bogdan/Desktop/ReactTimer/app/components/Clock.jsx',
      CountdownForm:'C:/Users/Bogdan/Desktop/ReactTimer/app/components/CountdownForm.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
