const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let srtArr = []
    let clrStr = ''
    if( members == null ) return false
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == 'string') {
            clrStr = members[i].trim()
            srtArr.push(clrStr[0].toUpperCase())
        }
    }
    return srtArr.sort().join('')
};
