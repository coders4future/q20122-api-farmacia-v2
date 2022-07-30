const express = require('express');
const router = express.Router();

const farmacia = require('../services/farmacia');

// Listar todos as farmacias
router.get('/', async function (req, res, next) {
    try {

        res.json(await farmacia.getFarmacia(req.query.page));

    } catch (err) {

        console.error(`Erro`, err.message);
        next(err);
        
    }
});

// incluir Farmacia
router.post('/incluir', async function (req, res, next) {

    const pInfo =  {
        nome,
        endereco,
        localizacao
    } = req.body;
    
    try {
        res.json(await farmacia.incluirFarmacia(pInfo));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err);
    }
});

// alterar Farmacia
router.post('/alteracao', async function (req, res, next) {

    const pInfo =  {
        localizacao,
        endereco,
        id
    } = req.body;
    
    try {
        res.json(await farmacia.alterarFarmacia(pInfo));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err);
    }
});

// selectiona Farmacia pelo ID
router.post('/id', async function (req, res, next) {

    const pInfo =  {
        id
    } = req.body;
    
    try {
        res.json(await farmacia.getFarmaciaId(pInfo));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err);
    }
});


module.exports = router;