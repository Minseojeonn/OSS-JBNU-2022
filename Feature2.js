/*eslint-disable*/
const { Channel } = require('diagnostics_channel');

const schedule = function (rtm, channel, text) {
  const regexp2 = new RegExp(':');
  
  // console.log(data);
  try {
    console.log('안내메시지 출력 완료');
    if (global.Channels[channel] === 0) { // first visit with '학사일정'
      global.Channels[channel] = 1;
    } else if (global.Channels[channel] === 1) {
      global.Channels[channel] = 0;
      if(`${text} ` in global.data){ // key in dict
        rtm.sendMessage(global.data[`${text} `], channel);
      }
      else{ // no key in dict
        rtm.sendMessage("해당 일정은 존재하지 않습니다.", channel);
        return Promise.resolve('no-plan')
      }     
    } else { // first visit with date
      rtm.sendMessage('잘못된 접근입니다.', channel);
      return Promise.resolve('worng access');
    }
    return Promise.resolve('Plan');
  } catch (error) {
    console.log('error!', error.data);
    return Promise.resolve('error');
  }
};

module.exports = schedule;
