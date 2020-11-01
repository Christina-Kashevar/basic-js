const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(param = true) {
      this.param = param;
  }

  encrypt(phrase, key) {
    if (!phrase || !key ) {
      throw new Error('Not implemented');
    }
    let result = [];
    phrase = phrase.toUpperCase();
    key = key.toUpperCase();
    for (let i =0, j =0; i <phrase.length; i++) {
      let charCode = phrase.charCodeAt(i);
      if ( charCode >= 65 && charCode <= 90) {
        let phraseNum = phrase[i].charCodeAt() - 65;
        let keyIndex =  j% key.length;
        let keyNum = key[keyIndex].charCodeAt() - 65;
        let charCodeResult = phraseNum + keyNum + 65;
        if ( charCodeResult > 90) { charCodeResult -=26}
        result.push( String.fromCharCode(charCodeResult) );
        j++
      } else {
        result.push( phrase[i] )
      }
      
    }
    if (!this.param) result.reverse();
    return result.join('');
  }
  
  decrypt(phrase, key) {
    if (!phrase || !key ) {
      throw new Error('Not implemented');
    }
    let result = [];
    phrase = phrase.toUpperCase();
    key = key.toUpperCase();
    for (let i =0, j =0; i <phrase.length; i++) {
      let charCode = phrase.charCodeAt(i);
      if ( charCode >= 65 && charCode <= 90) {
        let phraseNum = phrase[i].charCodeAt() - 65;
        let keyIndex = j% key.length;
        let keyNum = key[keyIndex].charCodeAt() - 65;
        let charCodeResult = phraseNum - keyNum + 65;
        if ( charCodeResult < 65) { charCodeResult +=26}
        result.push( String.fromCharCode(charCodeResult) );
        j++
      } else {
        result.push( phrase[i] )
      }
      
    }
    if (!this.param) result.reverse();
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
