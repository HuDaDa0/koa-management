const Router = require('koa-router')

const userController = require('../controller/user.controller.js')


const router = new Router({ prefix: '/users' })


router.post('/', userController.create)


module.exports = router
