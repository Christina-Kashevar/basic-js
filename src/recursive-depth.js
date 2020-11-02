const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let counter = 1;
    let newArr = arr.slice();
    arr = arr.flat();
    if (JSON.stringify(newArr)!==JSON.stringify(arr)) {
      ++counter
     counter= 1 + this.calculateDepth(arr);
    }
    return counter;
  }
};