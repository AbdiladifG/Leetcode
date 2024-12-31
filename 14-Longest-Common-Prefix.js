/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let longest = ''
    let comparison = strs[0]

    for (let i = 0; i < strs[0].length; i++) {
        if(strs.every(x=> x[i] === comparison[i])){
            longest += comparison[i]
        }
        else{
            break;
        }
    }
    return longest


};