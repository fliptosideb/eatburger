const { createConnection } = require('mysql2')


module.exports = createConnection({
  host: process.env.dbhost,
  port: process.env.dbport,
  user: process.env.dbuser,
  password: process.env.dbpassword,
  database: process.env.db
})
