const { expect } = require('chai');
const { mod10, mod11 } = require('../lib/utils');

describe('test mod 10 method', () => {
  it('should be true using mod10 example provided by Bankgirot', () => {
    expect(mod10('3316812057492')).to.be.true;
  });

  it('should be true when valid Swedish ssn', () => {
    expect(mod10('9906130241')).to.be.true;
  });

  it('should be false when invalid Swedish ssn', () => {
    expect(mod10('9906130242')).to.be.false;
  });
});

describe('test mod 11 method', () => {
  it('should be true using mod11 example provided by Bankgirot', () => {
    expect(mod11('1912763608957')).to.be.true;
  });
});