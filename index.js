const { RTMClient } = require('@slack/rtm-api');
const fs = require('fs');

const regex = '/';
let token;
global.Channels = {};

try {
  token = fs.readFileSync('./token').toString('utf-8');
} catch (err) {
  console.error(err);
}

console.log(token);

const rtm = new RTMClient(token);
rtm.start();

const { channel } = require('diagnostics_channel');// eslint-disable-line 
const greeting = require('./greeting');
const square = require('./square');
const Feature1 = require('./Feature1');// eslint-disable-line
const Feature2 = require('./Feature2');// eslint-disable-line
const Feature3 = require('./Feature3');// eslint-disable-line
const Feature4 = require('./Feature4');// eslint-disable-line

rtm.on('message', (message) => {
  const { channel } = message;// eslint-disable-line 
  const { text } = message;

  if (!Number.isNaN(text)) {
    square(rtm, text, channel);
  } else if (regex.test(text)) {
    Feature2(rtm, channel, text);
  } else {
    switch (text) {
      case '테스트를 시작한다.':
        break;
      case 'hi':
        greeting(rtm, channel);
        break;
      case '학사일정':
        (async () => {
          rtm.sendMessage('안내 받을 날짜를 이야기해주세요. (예, 12/21)', channel);
          global.Channels[channel] = 0;
          await Feature2(rtm, channel, text);
        })();
        break;
      default:
        rtm.sendMessage(channel, channel);
        break;
    }
  }

  // 두번째 query를 날리는 경우.
  if (Channels[channel] === 0) {
    delete Channels[channel];
  }
});
