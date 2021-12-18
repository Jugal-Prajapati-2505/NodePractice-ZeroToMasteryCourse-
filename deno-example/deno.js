const food = 'Love'

if (food === 'Love1') {
    console.log('Deno is born!!')
} else {
    console.log(' Needs some Love..')
}
setTimeout(() => {
    console.log('check');
    console.log(Deno.metrics());
}, 1000);
