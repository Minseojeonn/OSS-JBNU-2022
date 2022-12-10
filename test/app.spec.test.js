/*eslint-disable*/
require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');
const fs = require('fs');

let status = 0;

let token;

try {
  token = fs.readFileSync('../test_token').toString('utf-8');
} catch (err) {
  console.error(err);
}
token = token.trim();

const test_uID = 'U04C2Q8BGDN';
const test_channel = 'C04BD9F3Q6N';

console.log(token);

const rtm = new RTMClient(token);
rtm.start();

rtm.on('ready', async () => {
  const rdy1 = await rtm.sendMessage('테스트를 시작한다.', test_channel);
  console.log('테스트 루틴 시작이다.');
  status++;

  const rdy2 = await rtm.sendMessage('Hi', test_channel);
});

rtm.on('message', (message) => {
  const { text } = message;

  console.log('테스트 #', status ,'받은 메시지 :', text );

  if (message.user == test_uID) {
    switch (status) {
      case 1:
        if (text == 'Hello' || text == 'Nǐ hǎo' || text == 'Hola' ) {
          console.log('테스트 #1 성공');
        } else {
          console.log('테스트 #1 실패');
          process.exit(1);
        }

      //////////////////// 
        rtm.sendMessage('Hi', test_channel);
        status++;
        console.log('테스트 #2 - 인사하기 시작');
        break;
      case 2:
        if (text == 'Hello' || text == 'Nǐ hǎo' || text == 'Hola') {
          console.log('테스트 #2 성공');
        } else {
          console.log('테스트 #2 실패');
          process.exit(1);
        }

      ////////////////////

      //////////////////// 
      rtm.sendMessage('Hi', test_channel);
      status++;
      console.log('테스트 #3 - 인사하기 시작');
      break;
    case 3:
      if (text == 'Hello' || text == 'Nǐ hǎo' || text == 'Hola') {
        console.log('테스트 #3 성공');
      } else {
        console.log('테스트 #3 실패');
        process.exit(1);
      }

    ////////////////////

    //////////////////// 
    rtm.sendMessage('4', test_channel);
    status++;
    console.log('테스트 #4 - 계산하기 시작');
    break;
  case 4:
    if (text == '16') {
      console.log('테스트 #4 성공');
    } else {
      console.log('테스트 #4 실패');
      process.exit(1);
    }

  ////////////////////
  //////////////////// 
  rtm.sendMessage('16', test_channel);
  status++;
  console.log('테스트 #5 - 계산하기 시작');
  break;
case 5:
  if (text == '256') {
    console.log('테스트 #5 성공');
  } else {
    console.log('테스트 #5 실패');
    process.exit(1);
  }

////////////////////  
//////////////////// 
rtm.sendMessage('학사일정', test_channel);
status++;
console.log('테스트 #6 - 일정확인');
break;
case 6:
if (text == '안내 받을 날짜를 이야기해주세요. (예, 12/21)') {
  console.log('테스트 #6 성공');
} else {
  console.log('테스트 #6 실패');
  process.exit(1);
}
////////////////////  
//////////////////// 
rtm.sendMessage('10/3', test_channel);
status++;
console.log('테스트 #7 - 일정확인');
break;
case 7:
if (text == '해당 일정은 존재하지 않습니다.') {
  console.log('테스트 #7 성공');
} else {
  console.log('테스트 #7 실패');
  process.exit(1);
}
//////////////////// 
rtm.sendMessage('학사일정', test_channel);
status++;
console.log('테스트 #8 - 일정확인');
break;
case 8:
if (text == '안내 받을 날짜를 이야기해주세요. (예, 12/21)') {
  console.log('테스트 #8 성공');
} else {
  console.log('테스트 #8 실패');
  process.exit(1);
}
////////////////////  
//////////////////// 
rtm.sendMessage('9/3', test_channel);
status++;
console.log('테스트 #9 - 일정확인');
break;
case 9:
if (text == ' 2학기 수강신청 변경 기간') {
  console.log('테스트 #9 성공');
} else {
  console.log('테스트 #9 실패');
  process.exit(1);
}
//////////////////// 
//////////////////// 
rtm.sendMessage('9/3', test_channel);
status++;
console.log('테스트 #10 - 일정확인');
break;
case 10:
if (text == '잘못된 접근입니다.') {
  console.log('테스트 #10 성공');
} else {
  console.log('테스트 #10 실패');
  process.exit(1);
}
////////////////////  
//////////////////// 
rtm.sendMessage('오늘 밥 뭐야', test_channel);
status++;
console.log('테스트 #11 - 오늘 밥 뭐야');
break;
case 11:
if (text == '오늘은 휴무 입니다.' || text.includes('\n')) { // 수정필요 주말이라 모르게씅ㅁ ..
  console.log('테스트 #11 성공');
} else {
  console.log('테스트 #11 실패');
  process.exit(1);
}
//////////////////// 
//////////////////// 
rtm.sendMessage('이번주 뭐 나와', test_channel);
status++;
console.log('테스트 #12 - 일정확인');
break;
case 12:
if (text.includes('Mon - ')) {
  console.log('테스트 #12 성공');
} else {
  console.log('테스트 #12 실패');
  process.exit(1);
}
////////////////////  
//////////////////// 
rtm.sendMessage('학과 안내', test_channel);
status++;
console.log('테스트 #13 - 학과안내');
break;
case 13:
if (text == '안내 받을 학과 이름을 이야기해주세요.') {
  console.log('테스트 #13 성공');
} else {
  console.log('테스트 #13 실패');
  process.exit(1);
}
//////////////////// 
//////////////////// 
rtm.sendMessage('Library and Information science', test_channel);
status++;
console.log('테스트 #14 - 학과안내 - ver 정상입력');
break;
case 14:
if (text == 'College of Humanities, 427') {
  console.log('테스트 #14 성공');
} else {
  console.log('테스트 #14 실패');
  process.exit(1);
}
////////////////////  
//////////////////// 
rtm.sendMessage('학과 안내', test_channel);
status++;
console.log('테스트 #15 - 학과안내');
break;
case 15:
if (text == '안내 받을 학과 이름을 이야기해주세요.') {
  console.log('테스트 #15 성공');
} else {
  console.log('테스트 #15 실패');
  process.exit(1);
}
//////////////////// 
//////////////////// 
rtm.sendMessage('LibraryANDInformationscience', test_channel);
status++;
console.log('테스트 #16 - 학과안내 - ver 대소문자 변경');
break;
case 16:
if (text == 'College of Humanities, 427') {
  console.log('테스트 #16 성공');
} else {
  console.log('테스트 #16 실패');
  process.exit(1);
}
////////////////////  
//////////////////// 
rtm.sendMessage('학과 안내', test_channel);
status++;
console.log('테스트 #17 - 학과안내');
break;
case 17:
if (text == '안내 받을 학과 이름을 이야기해주세요.') {
  console.log('테스트 #17 성공');
} else {
  console.log('테스트 #17 실패');
  process.exit(1);
}
//////////////////// 
//////////////////// 
rtm.sendMessage('LibraryANDInformationscienc', test_channel);
status++;
console.log('테스트 #18 - 학과안내 - ver LEVinput');
break;
case 18:
if (text == 'College of Humanities, 427') {
  console.log('테스트 #18 성공');
} else {
  console.log('테스트 #18 실패');
  process.exit(1);
}
////////////////////
console.log('테스트 성공적으로 완료하였습니다.');
process.exit(1);
    }
  } else {
    rtm.sendMessage('테스트 채널에서 떠들지 마세요.', test_channel);
  }
});
