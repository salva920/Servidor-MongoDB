const { Router } = require('express');
const { busqueda,
        almacenGet,
        almacenModificar, 
        almacenCrear, 
        almacenBorrar } = require('../controllers/almacen');

const router = Router();

router.get('/', almacenGet);

router.get('/busqueda/:dato', busqueda);

router.post('/', almacenCrear);

router.put('/:id', almacenModificar);

router.delete('/:id', almacenBorrar);


module.exports = router;