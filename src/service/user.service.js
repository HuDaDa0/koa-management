const connection = require('../app/database')

class UserService {
  async create (user) {
    const { name, password } = user
    const statement = `INSERT INTO user (name, password) VALUE (?, ?);`
    await connection.execute(statement, [name, password])
    return '创建成功'
  }
}

module.exports = new UserService()
