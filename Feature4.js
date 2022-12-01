/*eslint-disable*/
const { Channel } = require('diagnostics_channel');

const Feature4 = function (rtm, channel, text) {
  try {
    for (i in global.office) {
      console.log(global.office[i].includes(text));
      console.log(text);
      if (global.office[i].includes(text)) {
        rtm.sendMessage(global.loc[i], channel);
        break;
      }
    }
  } catch (error) {
    console.log('error!', error.data);
    return Promise.resolve('error');
  }
};

module.exports = Feature4;
