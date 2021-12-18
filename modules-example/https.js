const request = require('./request');
const responce = require('./response');

function makeRequest(url, data) {
    request.send(url, data);
    return responce.read();
}

const responseData = makeRequest('https://google.com','Hello');
console.log(responseData);