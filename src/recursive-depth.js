const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    if ( ! Array.isArray(arr) ) {
      throw new CustomError('Not implemented');
    }
    let counter = 1;

    // arr.flat()
    // arr.map( item => {
    //   if (Array.isArray(item)) {
    //     return 1 + this.calculateDepth(item)
    //   } 
    // })
    // return 1 + this.calculateDepth(arr.flat(counter));

    function compareArrays (arr, newArr) {
      if (arr.length !== newArr.length) {
        return false;
      }
      for (let i =0; i < arr.length; i++) {
        if (arr[i] !== newArr[i]) {
          return false
        }
      }
      return true;
    }
    // return 1 + this.calculateDepth(arr.flat(counter));

    function recursion (arr) {
      let oldArr = [].concat(arr);
      arr = arr.flat();
      if ( compareArrays(oldArr, arr) ) {
        return counter;
      }
      ++counter;
      recursion (arr)
    }
    recursion (arr)
    return counter
   }
};