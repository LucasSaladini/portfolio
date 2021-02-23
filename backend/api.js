const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');

app.use(require('cors')());
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({message: 'Tudo ok por aqui!'});
})

app.post('/send', (req, res, next) => {
    res.json(req.body);
})

const server = http.createServer(app);
server.listen(3030);
console.log('Servidor escutando na porta 3030...')