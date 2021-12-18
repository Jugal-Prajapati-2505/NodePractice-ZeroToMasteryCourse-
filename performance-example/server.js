const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        //event loop is bloked
    }
}

app.get('/', (req, res) => {
    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => {}
    res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(4000);
    res.send(`Ding ding sdvsdvs! ${process.pid}`)
});

console.log('Running server.js........')
console.log('Worker process started.');
app.listen(3000);


