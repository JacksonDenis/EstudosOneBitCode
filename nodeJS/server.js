const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log (req.url);
    res.statusCode = 404;
    res.end(`<h1>Jackson Denis</h1>`)
});

server.listen(3000, () => {
    console.log('servidor ativo')
})