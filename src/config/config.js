const { PORTA, HOST, USUARIO, SENHA, BANCO } = process.env
console.log(`postgres://${USUARIO}:${SENHA}@${HOST}:${PORTA}/${BANCO}`);

module.exports = {
    url: `postgres://${USUARIO}:${SENHA}@${HOST}:${PORTA}/${BANCO}`
}
