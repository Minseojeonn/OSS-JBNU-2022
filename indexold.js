// this file using for Ask_bot.

const { RTMClient } = require('@slack/rtm-api');

const token = process.argv[2];

const rtm = new RTMClient(token);
rtm.start();

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (text === 'hello') rtm.sendMessage('hi', channel);
  else rtm.sendMessage('What?', channel);
});
