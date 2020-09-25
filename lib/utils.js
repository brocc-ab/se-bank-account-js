/**
 * Mod-10 method validation.
 *
 * @param {string} number
 * @returns {boolean}
 */
exports.mod10 = function (number) {
  const reversed = number.split('').reverse();

  let sum = 0;
  reversed.forEach((digit, i) => {
    let product = parseInt(i % 2 === 0 ? digit : 2 * digit);

    sum += product > 9 ? product - 9 : product;
  });

  return sum > 0 && sum % 10 === 0;
};

/**
 * Mod-11 method validation.
 *
 * @param {string} number
 * @returns {boolean}
 */
exports.mod11 = function (number) {
  const reversed = number.split('').reverse();

  let sum = 0;
  reversed.forEach((digit, i) => {
    let factor = (i % 10) + 1;

    sum += parseInt(factor * digit);
  });

  return sum > 0 && sum % 11 === 0;
};