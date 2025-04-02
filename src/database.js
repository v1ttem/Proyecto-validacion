const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usuarios",
});

connection.connect((err) => {
  if (err) {
    console.error("Error database:", err);
    return;
  }
  console.log("Conectado a la database");
});

module.exports = connection;
