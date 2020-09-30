const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectoController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//Crea proyectos
// api/proyectos  ( esto es un middleware)
router.post(
  "/",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").notEmpty()],
  proyectoController.crearProyecto
);

//Obtener todos los proyectos
router.get("/", auth, proyectoController.obtenerProyectos);

//Actualizar proyecto vida ID
router.put(
  "/:id",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").notEmpty()],
  proyectoController.actualizaProyecto
);

//Eliminar un proyecto
router.delete(
  "/:id",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").notEmpty()],
  proyectoController.eliminarProyecto
);

module.exports = router;
