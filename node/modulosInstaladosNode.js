const http = require('http')

http.createServer((req, res) => {
    res.write('Bom dia')
    res.end() // Finaliza a requisição.
}).listen(8080)