const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    let turnsNumber = 2**disksNumber -1;
    let secondsPerSolving = Math.floor((3600/turnsSpeed) * turnsNumber)
    let result ={
      turns:turnsNumber,
      seconds: secondsPerSolving
    }

    return result
};
