const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cac"
}); //objeto con datos de conexion

connection.connect((error) => {
  if (error) {
    return console.error(error);
  }

  console.log("Conectado");
});

module.exports = connection;