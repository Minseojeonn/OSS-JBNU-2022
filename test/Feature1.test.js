/*eslint-disable*/
const assert = require('assert');
const fs = require('fs');
const { RTMClient } = require('@slack/rtm-api');
const { channel } = require('diagnostics_channel');
const Feature1 = require('../Feature1');
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

describe('Feature1 test!', () => {
  before(async () => res = await Feature1(rtm, 'C04BD9F3Q6N', 0));
  it('-----------------------Test - eng print-----------------------', (done) => {
    assert.equal(res, "Hello");
    done();
  });
});
describe('Feature1 test!', () => {
  before(async () => res = await Feature1(rtm, 'C04BD9F3Q6N', 1));
  it('-----------------------Test - chi print-----------------------', (done) => {
    assert.equal(res, "Nǐ hǎo");
    done();
  });
});
describe('Feature1 test!', () => {
  before(async () => res = await Feature1(rtm, 'C04BD9F3Q6N', 2));
  it('-----------------------Test - Hola print-----------------------', (done) => {
    assert.equal(res, "Hola");
    done();
  });
});