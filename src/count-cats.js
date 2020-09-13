const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  matrix = matrix.flat();
  let counter=0;
  for (let i=0; i < matrix.length; i++) {
    if(matrix[i]== '^^') {
      ++counter
    }
  }
  return counter
};
