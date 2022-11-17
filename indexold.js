const {RTMClient} = require('@slack/rtm-api');

var token = 'xoxb-4227646272535-4257510757652-31QKvItAKdg9l4l0rpU4azQR';

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
