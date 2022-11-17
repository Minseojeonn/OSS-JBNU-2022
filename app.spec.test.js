require('dotenv').config();
const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');
const channel = 'D04BA58U7AR';

let token;

try{
    token = fs.readFileSync('./token').toString('utf-8');
}catch(err){
    console.error(err);
}   

console.log(token);

const rtm = new RTMClient(token);

(async() => {
    await rtm.start().
                    catch(console.error);   
})();

const greeting = require('./greeting.js');
const assert = require('assert');

var res;

describe("테스트를 시작합니다.")