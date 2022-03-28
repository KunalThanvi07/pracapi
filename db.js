const Pool = require("pg").Pool

const pool = new Pool({
    host : "localhost",
    user : "postgres",
    database : "TempDB_Demo",
    password : "Kunal@123",
    port : 5432
});


module.exports=pool;