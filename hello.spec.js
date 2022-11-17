const sayHello = require('./hello').sayHello;
const assert = require('assert');

describe('App test!', function(){
  it('Test - sayHello should return hello', function (done) {
    assert.equal(sayHello(), 'hello');
    done();
  });
});
