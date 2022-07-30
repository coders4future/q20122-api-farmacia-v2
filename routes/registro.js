const express = require('express');
const router = express.Router();

const registro = require('../services/registro');

// incluir Registro
router.post('/incluir', async function (req, res, next) {

    const pInfo =  {
        medicamento,
        farmacia,
        usuario,
        valor
    } = req.body;

    try {
        res.json(await registro.incluirRegistro(pInfo));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err);
    }
});

module.exports = router;