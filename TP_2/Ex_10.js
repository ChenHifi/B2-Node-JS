const events = require('events');
const ev = new events();
ev.on('myEvent', (msg) =>{
    console.log(msg);
});
ev.emit('myEvent', 'Ceci est un évènement');