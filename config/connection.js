const MYSQL = require("mysql");

const CONNECTION = MYSQL.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burger_db"
});

CONNECTION.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + CONNECTION.threadId);
});

module.exports = CONNECTION;
