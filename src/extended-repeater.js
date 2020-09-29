const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.separator = options.separator || '+';
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  str = '' + str;

  if (options.addition !== 'undefined') {
    options.additionSeparator = options.additionSeparator || '|';
  } else{
    options.additionSeparator = ''
  }

  if ( typeof options.addition === 'undefined' ) {
    options.addition = options.addition || '';
  }
  
  options.addition = '' + options.addition;

  let addPart = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).slice(0, -(options.additionSeparator.length))
  let newStr = str + addPart + options.separator;
  let result = newStr.repeat(options.repeatTimes).slice(0, -(options.separator.length))
  return result
};
  