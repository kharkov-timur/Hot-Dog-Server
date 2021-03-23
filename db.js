const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  // process.env.DATABASE_URL,
  process.env.DB_NAME, // name database
  process.env.DB_USER, // user database
  process.env.DB_PASSWORD, // user password
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
)

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })

module.exports = sequelize
