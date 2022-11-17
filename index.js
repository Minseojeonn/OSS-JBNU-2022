require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

let token = '';

const fs = require('fs');

try {
  const data = fs.readFileSync('./token.txt', 'utf8');
  const [first] = data.toString().split('\n');
  token = first;
} catch (err) {
  console.error(err);
}

const rtm = new RTMClient(token);
rtm.start();

const greeting = require('./greeting');
const square = require('./square');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (!Number.isNaN(text)) {
    square(rtm, text, channel);
  } else {
    switch (text) {
      case 'hi':
        greeting(rtm, channel);
        break;
      default:
        rtm.sendMessage('i m alive', channel);
    }
  }
});
