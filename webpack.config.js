var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'public', 'entry.js'),
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  }
}
