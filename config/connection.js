var mysql = require("mysql");

if (process.env.jawsUrl) {
  connection = mysql.createConnection(process.env.jawsUrl);
} else {
  connection = mysql.createConnection({
    host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "vgskl3lryg5yeifg",
    password: "r70qn3nyvgcc6x9e",
    database: "as751k1rrdkog19w"
  })
}

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "burger_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
