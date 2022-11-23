const Feature1 = function (rtm, channel) {
  while (1) {// eslint-disable-line
    num = Math.floor(Math.random() * 3); // 0~2 사이의 정수
    if (num === 0) {
      console.log('(English)인사를 합니다.');
      rtm.sendMessage('Hello', channel);
      break;
    } else if (num === 1) {
      console.log('(Chinese)인사를 합니다.');
      rtm.sendMessage('Nǐ hǎo', channel);
      break;
    } else {
      console.log('(Español)인사를 합니다.');
      rtm.sendMessage('hola', channel);
      break;
    }
  }
};
module.exports = Feature1;
// hello
