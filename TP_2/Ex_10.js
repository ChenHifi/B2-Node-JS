const events = require('events');
const ev = new events(); //assigen un event à la const ev
ev.on('myEvent', (msg) =>{ //nouvel event
    console.log(msg);
});
ev.emit('myEvent', 'Ceci est un évènement');