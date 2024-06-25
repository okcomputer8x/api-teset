const db = require("../db/db");

const index = (req, res) => {
  const sql = "SELECT * FROM productos";

  db.query(sql, (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    res.json(rows);
  });
};
//metodo GET
const show = (req, res) => {
  const { id } = req.params; //desustrucuracion del objeto

  const sql = "SELECT * FROM productos WHERE id = ?";//no usar nunca id aca porq me pueden meter un insert en la consulta y hackear la base de datos
  db.query(sql, [id], (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (rows.length == 0) {
      return res.status(404).json({ error: "No existe el producto" });
    }

    res.json(rows[0]);// el get me trae el array dentro del elemento,por eso con el indice me trae el primer elemento que seria el array de ese identificador.
  });
};
//metodo POST
const store = (req, res) => {
  const { nombre, stock, precio,categoria_id } = req.body;

  const sql = "INSERT INTO productos (nombre, precio, stock ,categoria_id) VALUES (?, ?, ?,?)";
  db.query(sql, [nombre, precio, stock,categoria_id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    const producto = { ...req.body, id: result.insertId };

    res.json(producto);
  });
};

//metodo PUT
const update = (req, res) => {
  const { id } = req.params;
  const { nombre, stock, precio } = req.body;

  const sql =
    "UPDATE productos SET nombre = ?, stock = ?, precio = ? WHERE id = ?";
  db.query(sql, [nombre, stock, precio, id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (result.affectedRows == 0) {
      return res.status(404).json({ error: "No existe el producto" });
    }

    const producto = { ...req.body, ...req.params };

    res.json(producto);
  });
};

//metodo DELETE
const destroy = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM productos WHERE id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (result.affectedRows == 0) {
      return res.status(404).json({ error: "No existe el producto" });
    }

    res.json({ mensaje: `Producto ${id} borrado` });
  });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};//objeto para llamar funciones