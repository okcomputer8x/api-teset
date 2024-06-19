const express = require("express");
const router = express.Router()

const productos =[
    {id:1 , nombre: "producto Nro 1", stock: 10},
    {id:2 , nombre: "producto Nro 2", stock: 10},
    {id:3 , nombre: "producto Nro 3", stock: 10},
]

//Get Para obtener
router.get("/",(req,res) => {
    // res.send("listado de productos");
    res.send(productos);
});




// /productos/3/categoria/5?order=nombre&limit=10
router.get("/:id" ,(req,res) => {
    console.log(req.params.id);

    const producto = productos.find((elemento) => elemento.id == req.params.id);
    if(!producto) {
        return res.status(404).json({error:'no existe el prod'})
    }
    res.send(producto)
})

//POST para crear productos
router.post("/",(req,res) => {
    console.log(req.body);

    const producto = {
        id: productos.length + 1,
        nombre: req.body.nombre,
        stock: req.body.stock,
    };

    productos.push(producto);
    
    // res.send("post")
    res.status(201).res.send(producto);

    });

    //Metodo PUT para modificar datos
    router.put("/:id", (req,res) => {
        console.log(req.params);
        console.log(req.body);

        const producto = productos.find((elemento) => elemento.id == req.params.id);
        if(!producto) {
        return res.status(404).json({error:'no existe el prod'})
    }

    producto.nombre = req.body.nombre;
    producto.stock = req.body.stock;

    res.send(producto);
    });

    // DELETE metodo para borrar datos
    router.delete("/:id" ,(req,res) => {

    const producto = productos.find((elemento) => elemento.id == req.params.id);
    if(!producto) {
        return res.status(404).json({error:'no existe el prod'})
    }
    //si existe borralo
    const productoIndex= productos.findIndex((elemento) => elemento.id == req.params.id);

    productos.splice(productoIndex,1) // borra 1 elemento apartir del array
    res.send(producto);
    
});

module.exports = router;