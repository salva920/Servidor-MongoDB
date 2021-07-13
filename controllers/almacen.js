const { response, request } = require('express');

const Almacen = require('../models/almacen');

const almacenGet = async(req = request, res = response) => {
    const  almacen = await Promise.all([
        Almacen.find()
    ]);

    res.json(almacen);
}

const busqueda = async(req = request, res = response) => {
    const { dato } = req.params;

    const  almacen = await Promise.all([
        Almacen.find({area : dato})
    ]);

    res.json(almacen);
}


const almacenCrear = async(req = request, res = response) => {
    
    const { area, marca, descripcion, precio } = req.body;

    if(area && marca && descripcion && precio) {
        const almacen = new Almacen({ area, marca, descripcion, precio });

        // Guardar en BD
        await almacen.save();

        res.json({
            almacen
        });
    }

    res.status(403).json({
        msj: "Datos incompletos",
        formato: "{ area, marca, descripcion, precio }" 
    });



}

const almacenModificar = async(req = request, res = response) => {
    const { id } = req.params;
   
    const { ...datos } = req.body;

    console.log(datos);

    const almacen = await Almacen.findByIdAndUpdate( id, datos );

    res.json(almacen);

}

const almacenBorrar = async(req = request, res = response) => {
    const { id } = req.params;

    // Borramos de la BD
    const almacen = await Almacen.findByIdAndDelete( id );

    res.json(almacen);
}

module.exports = {
    busqueda,
    almacenGet,
    almacenModificar,
    almacenCrear,
    almacenBorrar,
}