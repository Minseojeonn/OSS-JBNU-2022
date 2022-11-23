const Feature1 = function (rtm, channel, num) {
  if (num === 0) {
    console.log('(English)인사를 합니다.');
    rtm.sendMessage('Hello', channel);
    return 'Hello';
  }else if (num === 1) {
    console.log('(Chinese)인사를 합니다.');
    rtm.sendMessage('Nǐ hǎo', channel);
    return 'Nǐ hǎo';
  }
   else{
	  console.log('(Español)인사를 합니다.');
  	rtm.sendMessage('Hola', channel);
  	return 'Hola';
}
};
module.exports = Feature1;
