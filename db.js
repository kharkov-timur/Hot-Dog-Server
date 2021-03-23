const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  // process.env.DB_NAME, // name database
  // process.env.DB_USER, // user database
  // process.env.DB_PASSWORD, // user password
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
)

module.exports = sequelize
