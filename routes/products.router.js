const express = require("express");
const router = express.Router();

const controller = require('../controllers/productos.controller')


//Get Para obtener
router.get("/", controller.index);


router.get("/:id" , controller.show);

//POST para crear productos
router.post("/",controller.store);

//Metodo PUT para modificar datos
router.put("/:id",controller.update);

    // DELETE metodo para borrar datos
    router.delete("/:id" ,controller.destroy);

module.exports = router;