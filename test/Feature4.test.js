/*eslint-disable*/
const assert = require('assert');
const fs = require('fs');
const { RTMClient } = require('@slack/rtm-api');
const { channel } = require('diagnostics_channel');
const greeting = require('../greeting');
const Feature4 = require('../Feature1');
const { sayHello } = require('../hello');

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

describe('Feature1 test!', () => {
  before(async () => res = await Feature4(rtm, 'C04BD9F3Q6N',"temp"));
  it('Test - Feature4 Test', (done) => {
    assert.equal(res, 'success');
    done();
  });
});