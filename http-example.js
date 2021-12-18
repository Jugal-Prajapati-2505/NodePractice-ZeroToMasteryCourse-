const http = require('https');

const req = http.request('https://google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk : ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});

req.end();

//////////////////////////////////////////////////////OR

// const { get }= require('https');

// get('https://google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk : ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data');
//     });
// });
