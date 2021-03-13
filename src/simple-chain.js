const CustomError = require("../extensions/custom-error");


const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        this.chain.push(value)
        return chainMaker
    },
    removeLink(position) {
        if (typeof position !== "number" || position > this.getLength) {
            this.chain = []
            throw new Error()
        }
        this.chain.splice(position - 1, 1)
        return chainMaker
    },
    reverseChain() {
        this.chain.reverse()
        return chainMaker
    },
    finishChain() {
        let finStr = []
        for (let i = 0; i < this.chain.length; i++) {
            if (i == 0 && this.chain.length > 1) {
                finStr.push(`( ${this.chain[i]} )~`)
            }else if(this.chain.length == 1){
                finStr.push(`( ${this.chain[i]} )`)
            }else if (i == this.chain.length - 1) {
                finStr.push(`~( ${this.chain[i]} )`)
            } else if (i > 0 && i < this.chain.length - 1) {
                finStr.push(`~( ${this.chain[i]} )~`)
            }
        }
        this.chain = []
        return finStr.join('')
    }
};

module.exports = chainMaker;
