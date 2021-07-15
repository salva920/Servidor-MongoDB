const { response, request } = require('express');

const Usuario = require('../models/usuario');




const usuariosGet = async(req = request, res = response) => {
    const usuarios = await Promise.all([
        Usuario.find()
    ]);

    res.json(usuarios);
}

const usuarioLogin = async(req = request, res = response) => {
    const { nombre, password } = req.params;
    const  usuarios = await Promise.all([
        Usuario.find({$and:[{nombre},{password}]})
    ]);

    if(usuarios[0].length === 0){
        res.status(401).json({
            "msj": "Usuario no encontrado",
            "ejemplo": "http://127.0.0.1:8000/api/nombre/password"
        });
    }
    res.json({usuarios, 'link': 'http://127.0.0.1:8000/api/almacen'});
}


const usuariosCrear = async(req = request, res = response) => {
    
    const { nombre, password } = req.body;

    const usuario = new Usuario({ nombre, password });

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario
    });
}

const usuariosModificar = async(req = request, res = response) => {
    const { id } = req.params;

    const { nombre, password } = req.body;

    console.log(req.body);

    const usuario = await Usuario.findByIdAndUpdate( id , {nombre, password} );

    res.json(usuario);

}

const usuariosBorrar = async(req = request, res = response) => {
    const { id } = req.params;

    // Borramos de la BD
    const usuario = await Usuario.findByIdAndDelete( id );

    res.json(usuario);
}

module.exports = {
    usuarioLogin,
    usuariosGet,
    usuariosModificar,
    usuariosCrear,
    usuariosBorrar,
}