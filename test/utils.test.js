const { expect } = require('chai');
const { mod10, mod11 } = require('../lib/utils');

validMod10ExamplesFromBankgirot = [
  '3316812057492',
  '55555551',
  '9912346',
]

invalidatedMod10ExamplesFromBankgirot = [
  '3316812057490',
  '55555550',
  '9912340',
]

validMod11ExamplesFromBankgirot = [
  '1912763608957',
  '241350',
  '324558',
]

invalidatedMod11ExamplesFromBankgirot = [
  '1912763608950',
  '241351',
  '324550',
]

describe('test mod 10 method', () => {
  it('should be true using examples provided by Bankgirot', () => {
    validMod10ExamplesFromBankgirot.forEach((input) => {
      expect(mod10(input)).to.be.true;
    })
  });

  it('should be false when Bankgirot examples have been modified', () => {
    invalidatedMod10ExamplesFromBankgirot.forEach((input) => {
      expect(mod10(input)).to.be.false;
    })
  });

  it('should be true when valid Swedish ssn', () => {
    expect(mod10('9906130241')).to.be.true;
  });

  it('should be false when invalid Swedish ssn', () => {
    expect(mod10('9906130242')).to.be.false;
  });
});

describe('test mod 11 method', () => {
  it('should be true using examples provided by Bankgirot', () => {
    validMod11ExamplesFromBankgirot.forEach((input) => {
      expect(mod11(input)).to.be.true;
    })
  });

  it('should be false when Bankgirot examples have been modified', () => {
    invalidatedMod11ExamplesFromBankgirot.forEach((input) => {
      expect(mod11(input)).to.be.false;
    })
  });
});