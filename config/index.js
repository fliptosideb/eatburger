const { createConnection } = require('mysql2')


// module.exports = createConnection({
//   host: process.env.dbhost,
//   port: process.env.dbport,
//   user: process.env.dbuser,
//   password: process.env.dbpassword,
//   database: process.env.db
// })

module.exports = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root1234',
  database: 'burgers_db'
})