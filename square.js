const square = function (rtm, text, channel) {
  console.log('제곱을 실시합니다.');
  console.log(text);
  rtm.sendMessage(String(text * text), channel);
};

module.exports = square;
