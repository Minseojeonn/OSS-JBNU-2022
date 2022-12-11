/*eslint-disable*/
const { Channel } = require('diagnostics_channel');

const Ranking = function(evaluation) {
  if (evaluation>=2.5) {
    return "★★★\n";
  } else if (evaluation>=1.5 && evaluation<2.5) {
    return "★★☆\n";
  } else {
    return "★☆☆\n";
  }
}


const Feature3 = function (rtm, channel, text) {  
  
  try {
    let daydata = new Date();
    let today = daydata.getDay();
    today -= 1; 

    if (text == '오늘 밥 뭐야') {
        if (today >= 0 && today <= 4) {
          let menu = global.result[today].menu1 + "\n" +global.result[today].menu2 + "\n" +global.result[today].menu3 + "\n" + global.result[today].menu4 + "\n";
          let rank = Ranking(global.result[today].evaluation);
          menu = menu + rank;
          rtm.sendMessage(menu, channel);
          return Promise.resolve('day success');
        } else {
          rtm.sendMessage("오늘은 휴무 입니다.", channel);
          return Promise.resolve('day success');
        }
    } else {
      let week = "";
      for (var i = 0; i<5; i++) {
        let rank = Ranking(global.result[i].evaluation);
        week = week + global.result[i].date + " - " + rank + "\n"; 
      } 
      rtm.sendMessage(week, channel);
      return Promise.resolve('week success');
    }
  } catch (error) {
    return Promise.resolve('error');
  }
};

module.exports = Feature3;

