const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
    },
    password: {
        type: String,
    },
});

UsuarioSchema.methods.toJSON = function() {
    const { __v, ...usuario  } = this.toObject();
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );