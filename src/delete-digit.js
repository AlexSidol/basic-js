const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let str = n.toString();
  let max = 0;
  let newArr = [];
  for (let i = 0; i < str.length; i += 1) {

    let cuttedValArr = Number(str.slice(0, i) + str.slice(i + 1));

    newArr.push(cuttedValArr);
  }

  let sortArr = newArr.sort((a, b) => b - a);
  max = sortArr[0];
  return max;
}

module.exports = {
  deleteDigit
};
