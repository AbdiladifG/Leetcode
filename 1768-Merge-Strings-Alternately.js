/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    word1 = word1.split("")
    word2 = word2.split("")


    let longest = word1.length > word2.length ? word1.length : word2.length
    let newL = []
    for(let i = 0; i < longest; i++){
        newL.push(word1[i])
        newL.push(word2[i])
    }
    return newL.join("")
};