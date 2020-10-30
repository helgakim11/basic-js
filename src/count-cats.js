const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsCount = 0;
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      var subArray = matrix[i];
      for(let j = 0; j < subArray.length; j++) {
        if (subArray[j] === '^^') {
          catsCount += 1;
        }
      }
    }
  }
  return catsCount;
};

