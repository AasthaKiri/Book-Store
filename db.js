const {Pool} =  require('pg')
const pool = new Pool ({
    user: 'postgres',
    password:'!@Aastha',
    database: 'BookStore',
    host: 'localhost',
    port: 5432
})

module.exports = pool;