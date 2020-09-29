const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 if ( !parseFloat(sampleActivity) || typeof sampleActivity !== 'string' || (parseFloat(sampleActivity) < 0) || (parseFloat(sampleActivity) > MODERN_ACTIVITY)) return false;

  let k = 0.693/ HALF_LIFE_PERIOD;
  return Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)))/ k )
};
