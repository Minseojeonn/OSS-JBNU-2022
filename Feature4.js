/*eslint-disable*/
const { Channel } = require('diagnostics_channel');

const Feature4 = function (rtm, channel, text) {
  try {
    let check = 0;
    for (i in global.office) {
      if (global.office[i].includes(text)) {
        check = 1; 
        rtm.sendMessage(global.loc[i], channel);
        break;
      }
    } 
    if (check == '1') {
      return Promise.resolve('Success')
    } else {
      rtm.sendMessage('잘못된 입력입니다.', channel);
      return Promise.resolve('worng input');
    }

  } catch (error) {
    console.log('error!', error.data);
    return Promise.resolve('error');
  }
};

module.exports = Feature4;
