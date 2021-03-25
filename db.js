// const pg = require('pg')
// pg.defaults.ssl = true
//
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_NAME, // name database
  process.env.DB_USER, // user database
  process.env.DB_PASSWORD, // user password
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
)

// const sequelize = new Sequelize(
//   process.env.DATABASE_URL,
//   // process.env.DB_NAME, // name database
//   // process.env.DB_USER, // user database
//   // process.env.DB_PASSWORD, // user password
//   {
//     dialect: 'postgres',
//     dialectOptions: {
//       "ssl": true
//     },
//     host: 'localhost',
//     port: 5432,
//     ssl: true
//   }
// )

module.exports = sequelize
