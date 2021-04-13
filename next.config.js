const path = require('path')
const isDev = process.env.NODE_ENV === 'develop'

console.log('NODE_ENV', process.env.NODE_ENV)

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,
    ]
    return config 
  },
}
