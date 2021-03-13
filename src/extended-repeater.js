const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (options.separator == null) options.separator = '+'
    if (options.additionSeparator == null) options.additionSeparator = '|'
    if (typeof options.separator != 'string') options.separator = String(options.separator)
    if (typeof options.additionSeparator != 'string') options.additionSeparator = String(options.additionSeparator)

    let repT = options.repeatTimes
    let repAT = options.additionRepeatTimes
    let addT = options.addition
    let addST = str
    if(repT == undefined) repT = 1
    if(repAT == undefined) repAT = 1
    if(addT == null && str == null) {
        addT = 'null'
        addST = 'null'
    }

    let newStr = []
    let addStr = []
    for (let i = 0; i < repT; i++) {
        newStr.push(addST)
        for (let j = 0; j < repAT; j++) {
            addStr.push(addT)
            addStr.push(options.additionSeparator)
        }
        addStr.splice(addStr.length - 1, 1)
        newStr.push(addStr.join(''))
        newStr.push(options.separator)
        addStr = []
    }
    newStr.splice(newStr.length - 1, 1)

    return newStr.join('')
};

