const config = require('../config');
const db = require('./db');

async function getFarmacia(page = 0) {
    const rows = await db.query('select * from farmacia ORDER BY 1 DESC');
    return rows;
}

async function incluirFarmacia(data) {
    let retorno = 1;
    console.log(data);
    const sql = "insert into farmacia (farma_nome, farma_endereco, farma_localizacao) values (?, ?, ?)";
    db.query(sql, [data.nome, data.endereco, data.localizacao], function (err, rows) {
        if (err) {
            retorno = 0;
        }

    });
    return retorno;
}

async function alterarFarmacia(data) {
    let retorno = 1;
    console.log(data);
    const sql = "update farmacia set farma_localizacao = ?, farma_endereco = ? where farma_id = ?";
    db.query(sql, [data.localizacao, data.endereco, data.id], function (err, rows) {
        if (err) {
            retorno = 0;
        }
    });
    return retorno;
}

async function getFarmaciaId(data) {
    let retorno = null;
    const sql = "select * from farmacia where farma_id = ?";
    const rows = await db.query(sql, [data.id], function (err, rows) {
        if (err) {
            retorno = null;
        }
    });
    retorno = rows;
    return retorno;
}


module.exports = {
    getFarmacia,
    incluirFarmacia,
    alterarFarmacia,
    getFarmaciaId
}

