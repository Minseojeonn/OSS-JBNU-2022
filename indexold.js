//this file using for Ask_bot.

const {RTMClient} = require('@slack/rtm-api');

var token = process.argv[2];


var rtm = new RTMClient(token);
rtm.start();


rtm.on('message',function(message){
	var channel = message.channel;
	var text = message.text;

	if(text == 'hello')
		rtm.sendMessage('hi',channel);
	else
		rtm.sendMessage('What?',channel);
});
