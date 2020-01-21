const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Ttab1998"
});

try {
  connection.connect(error => {
    if (error) throw error;
    console.log("Connected!");
  });
} catch (error) {
  console.log(error);
}

module.exports = connection;
