const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( /* members */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    createDreamTeam
};


createDreamTeam = (members) => {
    let name = '';
    if (typeof(members) != 'object') {
        return false
    } else {

    }
    for (let key in members) {
        if (members.length == 0 || !members[key].includes('string')) {
            return false;
        } else {
            if (typeof(members[key]) === 'string') {
                name += members[key].trim()[0].toUpperCase();
            }

        }
        return name.split('').sort().join('');
    }

}