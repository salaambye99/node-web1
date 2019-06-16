const expect = require('expect');
const tests = require('./tests');

it('should add 2 numbers', function () {
    var res = tests.add(10, 20);
    expect(res).toBe(30);
});