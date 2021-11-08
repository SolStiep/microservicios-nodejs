const express = require('express');
const http = require('http');

const app = express();
const port = process.env.PORT || 4001;
const NUMBER_HOST = process.env.NUMBER_HOST || "4000";
const NUMBER_PORT = parseInt(process.env.NUMBER_PORT) || 4000;

app.get('/year', (req, res) => {

    var options = {
        host: NUMBER_HOST,
        port: NUMBER_PORT,
        path: '/number',
        method: 'GET',
        headers: req.headers
    };

    const numreq = http.request(
        options,
        numresp => {
            let rta = "";
            numresp.on('data', d => {
                rta += d;
            });
            numresp.on('end', () => {
                var rtajson = JSON.parse(rta).number;
                var num = Math.floor(Math.random() * (3 - 1));
                if (rtajson < '10') {
                    rtajson = '0' + rtajson;
                }
                if (num == 0) {
                    year = '19' + rtajson;
                } else {
                    if (rtajson >= '21') {
                        year = '2021';
                    } else {
                        year = '20' + rtajson;
                    }
                }
                var json = '{"year": ' +
                    year + '}';
                res.writeHead(200, {
                    "Content-Type": "application/json"
                });
                res.end(json);
            });
        }
    );

    numreq.on('error', e => {
        console.log('Error with request: ' + e.message);
    });

    numreq.end();

});

app.listen(port, () => {
    console.log('Microservice B: random year.');
})