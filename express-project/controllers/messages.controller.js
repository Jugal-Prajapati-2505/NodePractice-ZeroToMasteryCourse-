const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my Friends!',
        friend: 'Elon Musk',
    });
    //res.sendFile(path.join(__dirname,'..','public','images', '7IT.png'));
    // res.send('<ul><li>Heyyyyyyyyyyy</li></ul>');
}

function postMessage(req, res) {
    console.log('Heyyyyyyyyyyy hiiiiiiiiiiii');
}

module.exports = {
    getMessages,
    postMessage,
};