const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( /* n */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    deleteDigit
};


function deleteDigit(num) {
    let maxNum = 0;
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {
        maxNum < str.replace(str[i], '') ?
            maxNum = str.replace(str[i], '') :
            maxNum;
    }
    return +maxNum;
}