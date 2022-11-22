/*eslint-disable*/
const assert = require('assert');
const fs = require('fs');
const { RTMClient } = require('@slack/rtm-api');
const { channel } = require('diagnostics_channel');
const greeting = require('../greeting');
const Feature2 = require('../Feature2');
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

describe('Feature2 test!', () => {
  before(async () => res = await Feature2(rtm, 'C04BD9F3Q6N',"temp"));
  it('Test - Feature2 Test', (done) => {
    assert.equal(res, 'success');
    done();
  });
});