const Pool = require("pg").Pool;

const pool = new Pool({
    user: "aakash",
    host: "localhost",
    port: 5432,
    database: "college_book_development"
})

module.exports = pool;