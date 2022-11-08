require('dotenv').config();

const {RTMClient} = require('@slack/rtm-api');

var token = '';

const fs = require('fs')
try {
  const data = fs.readFileSync('./token.txt', 'utf8')
  token = data.toString().split('\n')[0]
} catch (err) {
  console.error(err)
}

var rtm = new RTMClient(token);
rtm.start();

var greeting = require('./greeting');
var square = require('./square');

rtm.on('message',function(message){
	var channel = message.channel;
	var text = message.text;

	if(!isNaN(text)){
		square(rtm, text, channel);
	}else{
		switch(text){
			case 'hi':
				greeting(rtm,channel);
				break;
			default:
				rtm.sendMessage('i m alive', channel);
		}
	}
});
