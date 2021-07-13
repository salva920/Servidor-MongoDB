const { Schema, model } = require('mongoose');

const AlmacenSchema = Schema({
    area: {
        type: String,
    },
    marca: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    precio: {
        type: Number,
    }
});

AlmacenSchema.methods.toJSON = function() {
    const { __v, ...almacen  } = this.toObject();
    return almacen;
}

module.exports = model( 'Almacen', AlmacenSchema );