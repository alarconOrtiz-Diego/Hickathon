const Pool = require('pg').Pool;

const pool = new Pool({
    user: "dialarco",
    host: "localhost",
    database: "users",
    password: "tests",
    port: 5432,
});

module.exports = pool;