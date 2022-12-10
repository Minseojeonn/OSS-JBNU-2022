/*eslint-disable*/
const assert = require('assert');
const fs = require('fs');
const { RTMClient } = require('@slack/rtm-api');
const { channel } = require('diagnostics_channel');
const Feature3 = require('../Feature3');
const { sayHello } = require('../hello');

let token;

try {
  token = fs.readFileSync('../token').toString('utf-8');
} catch (err) {
  console.error(err);
}

const rtm = new RTMClient(token);
rtm.start();

describe('Feature3 test!', () => {
  before(async () => res = await Feature3(rtm, 'C04BD9F3Q6N',"오늘 밥 뭐야"));
  it('Test ----- Feature3 day Test -----', (done) => {
    assert.equal(res, 'day success');
    done();
  });
});

describe('Feature3 test!', () => {
  before(async () => res = await Feature3(rtm, 'C04BD9F3Q6N', '이번주 뭐 나와'));
  it('Test ----- Feature3 week Test -----', (done) => {
    assert.equal(res, 'week success');
    done();
  });
});