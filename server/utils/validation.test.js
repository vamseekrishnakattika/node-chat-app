const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString',() => {
  it('should reject non-string values',() => {
    var value = isRealString(1234);
    expect(value).toBe(false);
  });
  it('should reject string with only spaces',() => {
    var value = isRealString('     ');
    expect(value).toBe(false);
  });
  it('should allow string with non-space characters',() => {
    var value = isRealString('    vamsee   ');
    expect(value).toBe(true);
  });
});
