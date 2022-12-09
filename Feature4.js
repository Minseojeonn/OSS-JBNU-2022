/*eslint-disable*/
const { checkPrime } = require('crypto');
const { Channel } = require('diagnostics_channel');

const Feature4 = function (rtm, channel, text) {
  try {
    let check = 0;
    console.log('메시지 출력 완료');
    if (text=='학과 안내') { // first visit with '학사일정'
      global.Channels_F4[channel] = 1;
      return Promise.resolve('Success');
    } else if (global.Channels_F4[channel] === 1) {
      global.Channels_F4[channel] = 0;
      for (i in global.office) {
        if (global.office[i].includes(text)) {
          check = i; 
          break;
        }
      }
      if(global.office.includes(text)) {
        rtm.sendMessage(global.loc[check], channel);
        return Promise.resolve('Success');
      } else { // no key in dict
        rtm.sendMessage("잘못된 학과 이름입니다.", channel);
        return Promise.resolve('wrong name')
      }     
    } else { // first visit with date
      rtm.sendMessage('잘못된 접근입니다.', channel);
      return Promise.resolve('wrong access');
    }    
  } catch (error) {
    console.log('error!', error.data);
    return Promise.resolve('error');
  }
};

module.exports = Feature4;
