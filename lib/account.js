const { mod10, mod11 } = require('./utils');

// @see https://www.bankgirot.se/globalassets/dokument/anvandarmanualer/bankernaskontonummeruppbyggnad_anvandarmanual_sv.pdf
const banks = [
  {
    name: 'Svea Bank',
    regex: /^966[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Aion Bank SA',
    regex: /^958[0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Avanza Bank',
    regex: /^95[5-6][0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'BlueStep Finans',
    regex: /^968[0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'BNP Paribas SA',
    regex: /^947[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Citibank',
    regex: /^904[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Danske Bank',
    regex: /^1[2-3][0-9][0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Danske Bank',
    regex: /^24[0-9][0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'DNB Bank',
    regex: /^(919|926)[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Ekobanken',
    regex: /^970[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Erik Penser',
    regex: /^959[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Forex Bank',
    regex: /^94[0-4][0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Ica Banken',
    regex: /^927[0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'IKANO Bank',
    regex: /^917[0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'JAK Medlemsbank',
    regex: /^967[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Klarna Bank',
    regex: /^978[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Landshypotek',
    regex: /^939[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Lunar Bank A/S',
    regex: /^971[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Lån & Spar Bank Sverige',
    regex: /^963[0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Länsförsäkringar Bank',
    regex: /^(340|906)[0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Länsförsäkringar Bank',
    regex: /^902[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Marginalen Bank',
    regex: /^923[0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'MedMera Bank',
    regex: /^965[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Multitude Bank plc',
    regex: /^907[0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Nordax Bank',
    regex: /^964[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Nordea',
    regex: /^11[0-9]{9}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Nordea',
    regex: /^(1[4-9][0-9]{9}|20[0-9]{9})/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Nordea',
    regex: /^(?!3300)(3[0-3][0-9]{9})/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Nordea',
    regex: /^(?!3782)(3[4-9][1-9][0-9]{8})/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Nordea',
    regex: /^4[0-9]{10}/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Nordnet Bank',
    regex: /^910[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Northmill Bank',
    regex: /^975[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Resurs Bank',
    regex: /^928[0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Riksgälden',
    regex: /^988[0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Santander Consumer Bank',
    regex: /^946[0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'SBAB',
    regex: /^925[0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'SEB',
    regex: /^5[0-9]{10}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'SEB',
    regex: /^912[0-4][0-9]{7}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'SEB',
    regex: /^91[3-4][0-9]{8}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Skandiabanken',
    regex: /^91[5-6][0-9]{8}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Swedbank',
    regex: /^7[0-9]{10}$/,
    type: 1,
    comment: 1,
  },
  {
    name: 'Ålandsbanken Sverige AB',
    regex: /^23[0-9]{9}$/,
    type: 1,
    comment: 2,
  },
  {
    name: 'Danske Bank',
    regex: /^918[0-9]{11}$/,
    type: 2,
    comment: 1,
    mod10: true,
  },
  {
    name: 'Handelsbanken',
    regex: /^6[0-9]{12}$/,
    type: 2,
    comment: 2,
  },
  {
    name: 'Nordea/Plusgirot',
    regex: /^(95[0-4]|996)[0-9]{8,11}$/,
    type: 2,
    comment: 3,
    mod10: true,
  },
  {
    name: 'Nordea Personkonto',
    regex: /^(3300|3782)[0-9]{10}$/,
    type: 2,
    comment: 1,
    mod10: true,
  },
  {
    name: 'Riksgälden',
    regex: /^989[0-9]{11}$/,
    type: 2,
    comment: 1,
    mod10: true,
  },
  {
    name: 'Sparbanken Syd',
    regex: /^957[0-9]{11}$/,
    type: 2,
    comment: 1,
    mod10: true,
  },
  {
    name: 'Swedbank',
    regex: /^8[0-9]{10,14}$/,
    type: 2,
    comment: 3,
    mod10: true,
    clen: 5,
  },
  {
    name: 'Swedbank fd. Sparbanken Öresund',
    regex: /^93[0-4][0-9]{11}$/,
    type: 2,
    comment: 1,
    mod10: true,
  },
  {
    // Note: Bankgirot is not included in their own documentation for Swedish bank account numbers.
    name: 'Bankgirot',
    regex: /^9900[0-9]{7,8}$/,
    mod10: true,
  },
];

/**
 * Validates bank account number against given bank.
 *
 * @param {string} number
 * @param {object} bank
 * @returns {boolean|object}
 */
function validate(number, bank) {
  const clen = bank.clen ? bank.clen : 4;

  const clearing = number.slice(0, clen);

  const accnum = number.slice(clen);

  // Only check type 1 with comment 1 & 2, otherwise full account number excl. clearing is checked.
  const digits = bank.type === 1 && bank.comment === 1
    ? clearing.slice(1) + accnum
    : bank.type === 1 && bank.comment === 2 ? clearing + accnum
      : accnum;

  const valid = bank.mod10 ? mod10(digits) : mod11(digits);

  if (!valid) {
    return false;
  }

  return {
    bank: bank.name,
    clearing: clearing,
    number: accnum,
  };
}

/**
 * Validate Swedish bank account number.
 *
 * @param {string|number} account
 * @returns {boolean|object}
 */
module.exports = function (account) {
  const number = String(account).replace(/\D/g, '');

  for (let i in banks) {
    if (banks[i].regex.test(number)) {
      return validate(number, banks[i]);
    }
  }

  return false;
};