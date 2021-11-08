const express = require('express');
const http = require('http');

const app = express();
const port = process.env.PORT || 3000;
const NUMBER_HOST = process.env.NUMBER_HOST || "4001";
const NUMBER_PORT = parseInt(process.env.NUMBER_PORT) || 4001;

app.get('/yearsago', (req, res) => {

    var options = {
        host: NUMBER_HOST,
        port: NUMBER_PORT,
        path: '/year',
        method: 'GET',
        headers: req.headers
    };

    const year = http.request(
        options,
        numresp => {
            let rta = "";
            numresp.on('data', d => {
                rta += d;
            });
            numresp.on('end', () => {
                var rtajson = JSON.parse(rta).year;
                var years = 2021 - rtajson;
                var text = 'It happened ' +
                    years + ' years ago';
                res.status(200).send(text);
            });
        }
    );

    year.on('error', e => {
        console.log('Error with request: ' + e.message);
    });

    year.end();

});

app.listen(port, () => {
    console.log('Microservice C: years ago.');
})