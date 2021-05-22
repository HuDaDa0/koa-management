const app = require('./app')
const config = require('./app/config')


app.listen(8000, () => {
  console.log('服务器启动成功在8000端口')
})