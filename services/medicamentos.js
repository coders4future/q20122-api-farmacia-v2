const config = require('../config');
const db = require('./db');

async function getMedicamentos(page = 0) {
    const rows = await db.query('select * from medicamento ORDER BY 1 DESC');
    return rows;
}

async function getMedicamentosCodigo(data) {
    let retorno = null;
    const sql = "select * from medicamento where medicamento_codigo = ?";
    const rows = await db.query(sql, [data.codigo], function (err, rows) {
        if (err) {
            retorno = null;
        }
    });
    retorno = rows;
    return retorno;
}

async function incluirMedicamentos(data) {
    let retorno = 1;
    const sql = "insert into medicamento (medicamento_nome, medicamento_codigo_barras) values (?, ?)";
    const ret = await db.query(sql, [data.nome, data.codigo_barras], function (err, rows) {
        if (err) {
            retorno = 0;
        }
        retorno = 2;
    });
    return retorno;
}

module.exports = {
    getMedicamentos,
    incluirMedicamentos,
    getMedicamentosCodigo
}

