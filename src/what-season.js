const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/*date*/) {
  throw new NotImplementedError('Not implemented');
  // if (!date) {
  //   return `Unable to determine the time of year!`;
  // }
  // if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date)) {
  //   return `Invalid date!`;
  // }
  // if (new Date().toDateString() === date.toDateString()) {
  //   return `Invalid date!`;
  // }

  // let month = date.getMonth();

  // console.log('typeof date', typeof date);
  // if (typeof date === 'object' && month >= 0) {

  //   if (month === 11 || month === 0 || month === 1) {
  //     return `winter`;
  //   } else if (month === 4 || month === 2 || month === 3) {
  //     return `spring`;
  //   } else if (month === 6 || month === 7 || month === 5) {
  //     return `summer`;
  //   } else if (month === 8 || month === 10 || month === 9) {
  //     return `autumn`;
  //   }
  // }
  // else {
  //   return `Invalid date!`;
  // }
}

module.exports = {
  getSeason
};
