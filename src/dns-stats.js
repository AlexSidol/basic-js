const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let swappedArr = [];
  for (let i = 0; i < domains.length; i += 1) {
    let domainsSubArr = domains[i].split(".");
    let newSybArr = [];
    for (let j = 0; j < domainsSubArr.length; j += 1) {
      newSybArr.unshift(domainsSubArr[j]);
    }
    swappedArr.push(newSybArr);
  }
  let swappedArrJoined = swappedArr.map(el => el.join('.'))

  let longestArrEl;
  let longestArrLength = 0;
  for (let i = 0; i < swappedArr.length; i += 1) {
    if (swappedArr[i].length > longestArrLength) {
      longestArrLength = swappedArr[i].length;
      longestArrEl = swappedArr[i];
    }
  }

  let obj = {};
  let summedElsArr = [];
  for (let j = 0; j < longestArrLength; j += 1) {
    summedElsArr.push(longestArrEl[j]);
    let summJoined = summedElsArr.join(".");

    let counter = 0;
    for (let x = 0; x < swappedArr.length; x += 1) {
      if (swappedArrJoined[x].includes(longestArrEl[j])) {
        counter += 1;
        obj[`.${summJoined}`] = counter;
      }
    }
  }


  let swappedArrFiltered = swappedArr.filter(el => el.length === longestArrLength && el !== longestArrEl);
  swappedArrFiltered.map(el => {
    el.join(".");
    obj[`.${el.join(".")}`] = 1;
  })

  return obj;
}

module.exports = {
  getDNSStats
};
