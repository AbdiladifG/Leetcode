/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word = ""
    let wordsArr = []
    for(let i = 0; i < s.length; i++){
        if(s[i] != " "){
            word += s[i]
        }
        if((s[i] == " " ||(i == s.length-1 && word != ""))&& word != ""){
            wordsArr.push(word)
            word = ''
        }
    }
    return wordsArr[wordsArr.length-1].length
};