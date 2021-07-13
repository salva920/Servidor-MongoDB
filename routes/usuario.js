const { Router } = require('express');
const { usuariosGet,
        usuarioLogin,
        usuariosModificar, 
        usuariosCrear, 
        usuariosBorrar } = require('../controllers/usuarios');

const router = Router();

router.get('/:nombre/:password', usuarioLogin);

router.get('/', usuariosGet);

router.post('/', usuariosCrear);

router.put('/:id', usuariosModificar);

router.delete('/:id', usuariosBorrar);


module.exports = router;