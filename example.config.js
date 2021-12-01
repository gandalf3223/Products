const user = 'username'
const pass = 'password'
const postgres_ip = 'localhost'
const port = 5432
const db_name = 'postgres'

module.exports = {
  local: `postgres://username:password@localhost:5432/database_name`,
  URL: `postgres://${user}:${pass}@${postgres_ip}:${port}/${db_name}`,
  postgres_ip: postgres_ip,
  port: port,
  db_name
}