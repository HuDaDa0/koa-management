class UserController {
  async create (ctx, next) {
    ctx.body = '创建成功'
  }
}

module.exports = new UserController
