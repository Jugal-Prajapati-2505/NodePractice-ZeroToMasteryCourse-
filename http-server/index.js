const http = require('http');

const PORT = 3000;

const server = http.createServer();

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:8100'
  ];

const friends = [
    {
        id: 0,
        name: 'Jugal',
    },
    {
        id: 1,
        name: 'Lay',
    },
    {
        id: 2,
        name: 'Binit',
    }
];

server.on('request', (req, res) => {
    const items = req.url.split('/');
    // /friends/2 => [' ', 'friends', '2']

    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:', friend);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res);
    } else if (req.method === 'GET' && items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) {
            const friendsIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendsIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
        
    } else if (req.method === 'GET' && items[1] === 'messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>hey!</li>');
        res.write('<li>what are your thoughts?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

// server.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}....`);
// });

// fetch('http://localhost:3000/friends', {
//     method: 'POST',
//     body: JSON.stringify({ id: 3, name: 'Grace Hopper'})
// })
// .then((Response) => Response.json())
// .then((friend) => console.log(friend));