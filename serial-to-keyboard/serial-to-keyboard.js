const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const {keyboard, Key} = require("@nut-tree/nut-js");


let counter = 0;

const port = new SerialPort({ path: '/dev/tty.usbserial-A10_16ks', baudRate: 38400 })

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', (data) => {
    console.log(`'${data}'`);
    if (data === 'p') {
        console.log(new Date().toString(), 'btn press ', counter)
        counter += 1;
        keyboard.type(Key.Space)
    } else {
        console.log("Unknown data", data);
    }
})


const fiveMinMs = 5 * 60 * 1000;

setInterval(() => {
    // Avoid getting idle kicked from the game (if that happens)
    // by sending a player move command every 5 minutes.
    // We boxed the player in with walls, so the player should
    // never come into our fixed garage view.
    keyboard.type(Key.W)
}, fiveMinMs)