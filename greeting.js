var greeting = function(rtm,channel){
	console.log('인사를 합니다.');
	rtm.sendMessage('Hello',channel);
}
module.exports = greeting;
//hello


