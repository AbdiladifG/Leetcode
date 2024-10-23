/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.trim().split(" ").reverse().filter(x => x !== "").join(" ")
    return str
};