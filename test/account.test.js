const { expect } = require('chai');
const account = require('../lib/account');

const banks = [
  {
    name: 'Svea Bank',
    account: '9660-1000010'
  },
  {
    name: 'Avanza Bank',
    account: '9550-0100000',
  },
  {
    name: 'BlueStep Finans',
    account: '9680-0000000',
  },
  {
    name: 'BNP Paribas SA',
    account: '9470-1000010',
  },
  {
    name: 'Danske Bank',
    account: '1200-0000010',
  },
  {
    name: 'DNB Bank',
    account: '9190-1000100',
  },
  {
    name: 'Ekobanken',
    account: '9700-1000010',
  },
  {
    name: 'Erik Penser',
    account: '9590-0000100',
  },
  {
    name: 'Forex Bank',
    account: '9400-0001000',
  },
  {
    name: 'Ica Banken',
    account: '9270-0010000',
  },
  {
    name: 'IKANO Bank',
    account: '9170-0001000',
  },
  {
    name: 'JAK Medlemsbank',
    account: '9670-0000000'
  },
  {
    name: 'Klarna Bank',
    account: '9780-0000100',
  },
  {
    name: 'Landshypotek',
    account: '9390-0000001'
  },
  {
    name: 'Lån & Spar Bank Sverige',
    account: '9630-0000001',
  },
  {
    name: 'Länsförsäkringar Bank',
    account: '3400-0001000',
  },
  {
    name: 'Länsförsäkringar Bank',
    account: '9020-0100000',
  },
  {
    name: 'Marginalen Bank',
    account: '9230-1000001',
  },
  {
    name: 'MedMera Bank',
    account: '9650-1000000',
  },
  {
    name: 'Nordax Bank',
    account: '9640-0010000',
  },
  {
    name: 'Nordea',
    account: '1100-0000001',
  },
  {
    name: 'Nordea',
    account: '1400-0001000',
  },
  {
    name: 'Nordea',
    account: '3000-1001000',
  },
  {
    name: 'Nordea',
    account: '3410-0100000',
  },
  {
    name: 'Nordea',
    account: '4000-1000000',
  },
  {
    name: 'Nordnet Bank',
    account: '9100-0000100',
  },
  {
    name: 'Northmill Bank',
    account: '9750-1000001',
  },
  {
    name: 'Resurs Bank',
    account: '9280-1000000',
  },
  {
    name: 'Riksgälden',
    account: '9880-0001000',
  },
  {
    name: 'Santander Consumer Bank',
    account: '9460-0010000',
  },
  {
    name: 'SBAB',
    account: '9250-0000001',
  },
  {
    name: 'SEB',
    account: '5000-1001000',
  },
  {
    name: 'SEB',
    account: '9120-0010000',
  },
  {
    name: 'SEB',
    account: '9130-1000000',
  },
  {
    name: 'Skandiabanken',
    account: '9150-0000010',
  },
  {
    name: 'Swedbank',
    account: '7000-1001000',
  },
  {
    name: 'Ålandsbanken Sverige AB',
    account: '2300-0000001',
  },
  {
    name: 'Danske Bank',
    account: '9180-1000000008',
  },
  {
    name: 'Handelsbanken',
    account: '6000-100000010',
  },
  {
    name: 'Nordea/Plusgirot',
    account: '9500-1000000008',
  },
  {
    name: 'Nordea Personkonto',
    account: '3300-7505092556',
  },
  {
    name: 'Nordea Personkonto',
    account: '3782-7505092556',
  },
  {
    name: 'Riksgälden',
    account: '9890-1000000008',
  },
  {
    name: 'Sparbanken Syd',
    account: '9570-1000000008',
  },
  {
    name: 'Swedbank',
    account: '80001-1000000008',
  },
  {
    name: 'Swedbank fd. Sparbanken Öresund',
    account: '9300-1000000008',
  },
  {
    name: 'Bankgirot',
    account: '9900-2000008',
  },
];

describe('test bank account numbers', () => {
  it('should be valid bank account numbers', () => {
    banks.forEach(bank => {
      const acc = account(bank.account);

      // Split clearing and account number.
      const parts = bank.account.split('-');

      expect(acc.bank).to.equal(bank.name);
      expect(acc.clearing).to.equal(parts[0]);
      expect(acc.number).to.equal(parts[1]);
    });
  });

  it('should be invalid bank account number', () => {
    const acc = account('0000-0000000');

    expect(acc).to.be.false;
  });
});