require('dotenv').config();
const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');

const channel = 'D04BA58U7AR';

let token;

try {
  const data = fs.readFileSync('./token.txt', 'utf8');
  const [first] = data.toString().split('\n');
  token = first;
} catch (err) {
  console.error(err);
}

console.log(token);

const rtm = new RTMClient(token);

(async () => {
  await rtm.start()
    .catch(console.error);
})();

const assert = require('assert');
const greeting = require('./greeting');

let res;

describe('테스트를 시작합니다.', async () => {
  before(async () => res = await greeting(rtm, channel));

  it('인사 모듈 테스트', (done) => {
    console.log(res);
    assert.equal(res, 'success');
    done();
  });
});
