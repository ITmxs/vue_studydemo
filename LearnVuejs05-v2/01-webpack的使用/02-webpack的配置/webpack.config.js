const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //动态获取路径 两个下划线 npm run  build   / webpack -dev -server
    filename: 'bundle.js'
  },
}