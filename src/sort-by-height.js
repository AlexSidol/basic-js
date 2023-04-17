const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  let mappedArr = [...arr];

  let arrWithEmptyValues = mappedArr.map((el, idx, arr) => {
    if (el > 0) {
      return arr[idx] = '';
    } else {
      return el;
    }
  })

  // let filteredArr = arr.filter(el => el > 0);
  let filteredAndSorted = arr.filter(el => el > 0).sort((a, b) => a - b);

  for (let i = 0; i < filteredAndSorted.length; i += 1) {
    arrWithEmptyValues.find((el, idx, ar) => {
      if (el === '') {
        return ar[idx] = filteredAndSorted[i];
      }
    });
  }

  return arrWithEmptyValues
}



module.exports = {
  sortByHeight
};
