const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;

  },
  removeLink(position) {
   if (typeof position != 'number' || Math.floor(position) != position ) {
      this.chain = [];
      throw "Error";
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
     let finalStr= ''
     for (let i =0; i< this.chain.length-1; i++) {
       finalStr += `( ${this.chain[i]} )~~`;
     }
     finalStr +=`( ${this.chain[this.chain.length-1]} )`;
     this.chain = [];
    return finalStr
  }
};

module.exports = chainMaker;
