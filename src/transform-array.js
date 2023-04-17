const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  function checks(newArr, arr) {
    if (newArr.includes('--discard-next')) {
      let indx = newArr.indexOf('--discard-next');
      if (indx === newArr.length - 1) {
        newArr.splice(indx, 1);
        return newArr;
      }
      newArr.splice(indx, 2);

      if (newArr.includes("--discard-next")
        || newArr.includes("--discard-prev")
        || newArr.includes("--double-next")
        || newArr.includes("--double-prev")) {
        checks(newArr, arr);
      } else {
        return newArr;
      }
    }
    else if (newArr.includes('--double-next')) {
      let indx = newArr.indexOf('--double-next');
      if (indx === newArr.length - 1) {
        newArr.splice(indx, 1);
        return newArr;
      }
      newArr.splice(indx, 1, newArr[indx + 1]);

      if (newArr.includes("--discard-next")
        || newArr.includes("--discard-prev")
        || newArr.includes("--double-next")
        || newArr.includes("--double-prev")) {
        checks(newArr, arr);
      } else {
        return newArr;
      }
    }
    else if (newArr.includes('--discard-prev')) {
      let indx = arr.indexOf('--discard-prev');
      let newIndx = newArr.indexOf('--discard-prev');
      let prevEl = arr[indx - 1];
      let newPrevEl = newArr[newIndx - 1];

      if (newIndx === 0 || (prevEl !== newPrevEl)) {
        newArr.splice(newIndx, 1);
        return newArr;
      }
      newArr.splice(indx - 1, 2);

      if (newArr.includes("--discard-next")
        || newArr.includes("--discard-prev")
        || newArr.includes("--double-next")
        || newArr.includes("--double-prev")) {
        checks(newArr, arr);
      } else {
        return newArr;
      }

    }
    else if (newArr.includes('--double-prev')) {
      let indx = arr.indexOf('--double-prev');
      console.log(indx);

      let prevEl = arr[indx - 1];
      let newIndx = newArr.indexOf('--double-prev');
      let newPrevEl = newArr[newIndx - 1];

      if (newIndx === 0 || prevEl !== newPrevEl) {

        newArr.splice(newIndx, 1);

        return newArr;
      }
      newArr.splice(indx, 1, arr[indx - 1]);
      return newArr;
    }
  }

  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let newArr = [...arr];
  checks(newArr, arr);
  return newArr
}

module.exports = {
  transform
};
