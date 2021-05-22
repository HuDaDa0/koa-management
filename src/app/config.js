const dotenv = require('dotenv').config()

// process.env now has the keys and values you defined in your .env file
// 只要调用一下 dotenv.config() 就会自动的将 .env 文件里面的配置项自动加载到 process.env 中去

module.exports = {
  APP_PORT
} = process.env
