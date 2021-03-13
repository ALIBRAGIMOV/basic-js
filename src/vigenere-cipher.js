const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(params) {
    this.param = params
  }
  encrypt(message, key) {
    if (this.param == false) console.log(this.param)
  }
  decrypt(message, key) {
  }
}
const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
console.log(directMachine.encrypt('attack at dawn!', 'alphonse')) //=> 'AEIHQX SX DLLU!'
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) //=> 'ATTACK AT DAWN!'
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')) //=> '!ULLD XS XQHIEA'
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) //=> '!NWAD TA KCATTA'

module.exports = VigenereCipheringMachine;
