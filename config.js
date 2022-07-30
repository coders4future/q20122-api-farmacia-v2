// informações sobre as credenciais do Banco
const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "servidor-host",
        user: "usuario-banco",
        password: "senha-banco",
        database: "database-banco",
    },
    listPerPage: 10,
};

module.exports = config;