const http = require('http')
const http = require('http')
http.createServer((req, res) => {
    req.write('Bom dia')
    res.end() // Finaliza a requisição.
}).listen(8080)