import {formatCurrency} from '../scripts/utils/money.js';

console.log('Test suite: formatCurrency');
/**
 * @param {number} moneyCents
 * @param {string} expected
 */

function testFormatCurrency(moneyCents, expected) {
  const actual = formatCurrency(moneyCents);

  const passed = (actual === expected);

  console.log(
  `
  Input: ${moneyCents}
  Expected: "${expected}"
  Actual: "${actual}"
  Result: ${passed ? '✅ Passed' : '❌ Failed'}
  `
  );
}

//Note: To choose good names, we add the word 'The code'. Example:
//'The code' works with 0 => works with 0.
//Test cases.
console.log("Rounds to nearest cent");
testFormatCurrency(2000.5, '20.005');
testFormatCurrency(2000.5, '20.01');

console.log("Works with 0");
testFormatCurrency(0, '0.00');

console.log("Converts cents to dollars");
testFormatCurrency(2095, '20.95');
