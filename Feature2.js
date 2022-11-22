/*eslint-disable*/
const { Channel } = require('diagnostics_channel');

const schedule = function (rtm, channel, text) {
  const regexp2 = new RegExp(':');
  const fs = require('fs');
  const data = {};
  try {
    const readData = fs.readFileSync('./haksa.txt').toString('utf-8').split('\n');
    for (i in readData) {
      const temp = readData[i].split(':');
      data[temp[0]] = temp[1];
    }

    const keys = Object.keys(data);
    for (i in keys) {
      if (keys[i].length > 6) {
        const savedata = data[keys[i]];
        delete data[keys[i]];
        const temptemp = keys[i].split(/\/|-/);
        const diff = parseInt(temptemp[3]) - parseInt(temptemp[1]);
        for (let j = 0; j <= diff; j += 1) {
          const backdate = j + parseInt(temptemp[1]);

          data[`${String(temptemp[0])}/${String(backdate)} `] = savedata;
        }
      }
    }
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  // console.log(data);
  try {
    console.log('안내메시지 출력 완료');
    if (global.Channels[channel] === 0) {
      global.Channels[channel] = 1;
    } else if (global.Channels[channel] === 1) {
      rtm.sendMessage(data[`${text} `], channel);

      global.Channels[channel] = 0;
    } else {
      rtm.sendMessage('잘못된 접근입니다.', channel);
      return Promise.resolve('success');
    }
    return Promise.resolve('success');
  } catch (error) {
    console.log('error!', error.data);
    return Promise.resolve('error');
  }
};

module.exports = schedule;
