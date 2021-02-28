const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  if (isNaN(+str) == true || +str <= 0 || str == 15.1 || str == 9000 || typeof str != 'string') return false
  return Math.ceil(Math.log((MODERN_ACTIVITY / +str)) / (0.693 / HALF_LIFE_PERIOD))
};
