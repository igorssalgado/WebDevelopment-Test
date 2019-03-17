const http      = require('http');
const express   = require('express');
const path      = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/home.html')); //faz o server.js puxa a pagina HTML
});

app.use(express.static(__dirname + '/scripts')); //faz o server.js puxa os arquivos .js e .css tambem

app.listen(3001); //mostra a porta do localhost (onde a pagina vai aparecer)
