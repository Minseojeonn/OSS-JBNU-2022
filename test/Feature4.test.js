/*eslint-disable*/
global.office = [];
global.loc = [];
const assert = require('assert');
const fs = require('fs');
const { RTMClient } = require('@slack/rtm-api');
const { channel } = require('diagnostics_channel');
const greeting = require('../greeting');
const Feature4 = require('../Feature4');
const { sayHello } = require('../hello');
const readdata = require('../read_data');
global.Channels = {};
global.data = {};

let token;

try {
  token = fs.readFileSync('../token').toString('utf-8');
} catch (err) {
  console.error(err);
}

const rtm = new RTMClient(token);
rtm.start();

describe('App test!', () => {
  it('Test - sayHello should return hello', (done) => {
    assert.equal(sayHello(), 'hello');
    done();
  });
});

describe('App test!', () => {
  before(async () => res = await greeting(rtm, 'C04BD9F3Q6N'));
  it('Test - sayHello should return hello', (done) => {
    assert.equal(res, 'success');
    done();
  });
});




describe('Feature4 test!', () => {
  for(let i = 0; i < global.office.length; i++) {
    before(async () => res = await Feature4(rtm, 'C04BD9F3Q6N', "학과 안내"));
    it('Test - Feature4 Test ----- 정상 입력 -----', (done) => {
      assert.equal(res, 'Success');
      done();
    });
    before(async () => res = await Feature4(rtm, 'C04BD9F3Q6N', global.office[i])); 
    it('Test - Feature4 Test ----- 정상 출력 -----', (done) => {
      assert.equal(res, 'Success');
      done();
    });
  }
});

describe('Feature4 test!', () => {
  before(async () => res = await Feature4(rtm, 'C04BD9F3Q6N', global.office[0]));
  it('Test - Feature4 Test ----- 잘못된 접근 -----', (done) => {
    assert.equal(res, 'wrong access');
    done();
  });
});