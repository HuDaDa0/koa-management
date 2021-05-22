const Koa = require('koa')
const bodyParser = require('body-parser')

const userRouter = require('../router/user.router.js')

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())


module.exports = app
