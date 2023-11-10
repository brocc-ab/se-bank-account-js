# Swedish Bank Account for JavaScript

[![Build Status](https://travis-ci.org/brocc-ab/se-bank-account-js.svg?branch=master)](https://travis-ci.org/brocc-ab/se-bank-account-js)
[![Latest Version](https://img.shields.io/github/release/brocc-ab/se-bank-account-js.svg?style=flat-square)](https://github.com/brocc-ab/se-bank-account-js/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/brocc-ab/se-bank-account-js)

This package easily validates and returns details about Swedish bank account numbers using JavaScript. The details and validation rules are based on the documentation provided by Bankgirot, which can be found [here](https://www.bankgirot.se/globalassets/dokument/anvandarmanualer/bankernaskontonummeruppbyggnad_anvandarmanual_sv.pdf).

## Installation

```bash
npm install se-bank-account
```

## Usage

Enter the account number including clearing number in any format (string or integer) to get information about the account number such as the name of the bank, clearing number, and account number. If an account number is invalid it will return `false`.

Get information about a valid account number:

```js
const { account } = require 'se-bank-account';

// Returns an object if valid, otherwise it returns false.
const acc = account('3300-7505092556');

acc.bank // Nordea Personkonto
acc.clearing // 3300
acc.number // 7505092556
```

Using an invalid account number:

```js
const { account } = require 'se-bank-account';

const acc = account('0000-0000000'); // false
```

## Supported Banks

Following Swedish banks are currently supported:

* Aion Bank SA
* Avanza Bank
* BNP Paribas SA
* Bankgirot
* BlueStep Finans
* Citibank
* DNB Bank
* Danske Bank
* Ekobanken
* Erik Penser
* Forex Bank *(discontinued\*)*
* Handelsbanken
* IKANO Bank
* Ica Banken
* JAK Medlemsbank
* Klarna Bank
* Landshypotek
* Lunar Bank A/S
* Länsförsäkringar Bank
* Lån & Spar Bank Sverige
* Marginalen Bank
* MedMera Bank *(discontinued\*)*
* Multitude Bank plc
* Nordax Bank *(NOBA Bank Group\*\*)*
* Nordea
* Nordnet Bank
* Northmill Bank
* Plusgirot
* Resurs Bank
* Riksgälden
* SBAB
* SEB
* Santander Consumer Bank
* Skandiabanken
* Sparbanken Syd
* Svea Bank
* Swedbank
* Swedbank fd. Sparbanken Öresund
* Ålandsbanken Sverige AB

\* Bank is currently not available in Bankgirot's documentation, available in package for backwards compatibility.\
\*\* Package will return Nordax Bank, even though the company name has changed to NOBA Bank Group.

## Contributing

If you find a bug or a bank that might not be supported, please submit an issue on Github directly under [issues](https://github.com/brocc-ab/se-bank-account-js/issues).

Any contributions are welcome!
