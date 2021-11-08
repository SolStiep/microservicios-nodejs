const express = require('express');
const http = require('http');

const app = express();
const port = process.env.PORT || 4000;

app.get('/number', (req, res) => {
    var num = Math.floor(Math.random() * (100 - 1));
    var json = '{"number": ' +
        num + '}';
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(json);
});

app.listen(port, () => {
    console.log('Microservice A: random number.');
})