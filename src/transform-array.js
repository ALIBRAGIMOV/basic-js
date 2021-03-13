const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!(Array.isArray(arr))) {
        throw new Error()
    }
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--double-next':
                newArr.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (arr[i - 2] !== '--discard-next') newArr.push(arr[i - 1]);
                break;
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                if (arr[i - 2] !== '--discard-next') {
                    newArr.pop()
                }
                break;
            default:
                newArr.push(arr[i]);
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (newArr[j] == undefined) {
            newArr.splice(j, 1)
        }
    }
    return newArr
}
