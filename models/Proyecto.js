const mongoose = require("mongoose");

const ProyectoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
  },
  creado: {
    type: Date,
    default: Date,
  },
});

module.exports = mongoose.model("Proyecto", ProyectoSchema);
