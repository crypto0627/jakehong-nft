const mysql = require("mysql");
// connect MySQL
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "20000627",
  database: "nft",
});
module.exports = conn;
