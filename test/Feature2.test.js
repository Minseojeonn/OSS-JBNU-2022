/*eslint-disable*/
const assert = require('assert');
const fs = require('fs');
const { RTMClient } = require('@slack/rtm-api');
const { channel } = require('diagnostics_channel');
const greeting = require('../greeting');
const Feature2 = require('../Feature2');
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

describe('Feature2 test!', () => {
  global.Channels["C04BD9F3Q6N"] = 0;
  before(async () => res = await Feature2(rtm, 'C04BD9F3Q6N',"temp"));
  it('Test - Feature2 Test - 잘못된 접근', (done) => {
    assert.equal(res, 'no-plan');
    done();
  });
});


describe('Feature2 test!', () => {
  global.Channels["C04BD9F3Q6N"] = 1;
  before(async () => res = await Feature2(rtm, 'C04BD9F3Q6N',"temp"));
  it('Test - Feature2 Test - 정상 출력', (done) => {
    assert.equal(res, 'Plan');
    done();
  });
});

describe('Feature2 test!', () => {
  global.Channels["C04BD9F3Q6N"] = 1;
  before(async () => res = await Feature2(rtm, 'C04BD9F3Q6N',"temp"));
  it('Test - Feature2 Test - 없는 일정', (done) => {
    assert.equal(res, 'no-plan');
    done();
  });
});