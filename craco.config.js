const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@components': path.resolve(__dirname, 'src/presentation/components'),
      '@pages': path.resolve(__dirname, 'src/presentation/pages'),
      '@router': path.resolve(__dirname, 'src/presentation/router'),
      '@theme': path.resolve(__dirname, 'src/presentation/theme')
    },
  },
}; 