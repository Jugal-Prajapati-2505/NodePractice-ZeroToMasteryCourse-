const EventEmitter = require('events');
const celebrity = new EventEmitter();

//Subscribe 1

celebrity.on('race win', () =>{
    console.log('Congratulations');
});

//Subscribe 2

celebrity.on('race win', () =>{
    console.log('Loooose');
});

process.on('exit', (code) => {
    console.log('Process exit event with code : ', code);
});

celebrity.emit('race win');
celebrity.emit('race lost');
celebrity.emit('race win');

////////////////////////////////////////

// const EventEmitter = require('events');
// const celebrity = new EventEmitter();

// //Subscribe 1

// celebrity.on('race', (result) =>{
//    if (result === 'win'){
//     console.log('Congratulations');
//    }
// });

// //Subscribe 2

// celebrity.on('race', (result) =>{
//     if (result === 'win'){
//          console.log('Looses');
//    }
// });

// process.on('exit', (code) => {
//     console.log('Process exit event with code : ', code);
// });

// celebrity.emit('race', 'win');
// celebrity.emit('race', 'lost');
// celebrity.emit('race', 'win');