const config = require('../config');
const db = require('./db');

async function incluirRegistro(data) {
    let retorno = 1;
    const sql = "insert into registro_precos_medicamentos(medicamento_codigo, farma_id , usr_id, registro_data , registro_valor ) values (?, ?, ?, now(), ?) ";
    const ret = await db.query(sql, [data.medicamento, data.farmacia, data.usuario, data.valor], function (err, rows) {
        if (err) {
            retorno = 0;
        }
        retorno = 2;
    });
    return retorno;
}

module.exports = {
    incluirRegistro
}

