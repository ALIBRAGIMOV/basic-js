const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return 1 + arr.reduce((acc, curr) => Math.max(this.calculateDepth(curr), acc), 0);
    } else {
      return 0;
    }
  }
};