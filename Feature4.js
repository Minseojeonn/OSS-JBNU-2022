/*eslint-disable*/
const { checkPrime } = require('crypto');
const { Channel } = require('diagnostics_channel');
var levenshtein = require('fast-levenshtein');

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
        else if(global.modified_ofiice[i].includes(text.toUpperCase().replace(/ /g, ''))){
          check = i; 
          break;
        }
      }
      if(global.office.includes(text)) { //그냥 학과 있는지 확인
        rtm.sendMessage(global.loc[check], channel);
        return Promise.resolve('Success'); 
      }
      else if(global.modified_ofiice.includes(text.toUpperCase().replace(/ /g, ''))){ // 대문자, space 처리
        rtm.sendMessage(global.loc[check], channel);
        return Promise.resolve('Success');
      }  
      else { // no key in dict

        // levenshtein distance control from npm install fast-levenshtein
        let smallest_index = 0;
        let smallest_value = levenshtein.get(text, global.office[0] , {useCollator: true});; //compare two string
        for(var i = 1 ; i<global.office.length ; i++){
          const levenshtein_result = levenshtein.get(text, global.office[i] , {useCollator: true}); //compare two string
          if(smallest_value > levenshtein_result){
            smallest_value = levenshtein_result;
            smallest_index = i;
            console.log(global.office.lenght , " ", global.office[i], levenshtein_result);
          } 
        }
        if (smallest_value <= 7){ 
          let sendstring = global.office[smallest_index] + "을 말씀하시는 건가요?" + global.loc[smallest_index]+ "입니다.";
          rtm.sendMessage(sendstring, channel);
          return Promise.resolve('Success with levenshtein');
        }
        else{  
          rtm.sendMessage("잘못된 학과 이름입니다.", channel);
          return Promise.resolve('wrong name');
        }
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
