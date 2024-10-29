/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x >= 0){
        let l = x.toString().split(\\)
        console.log(l.reverse())
        if(l.join(\\) === l.reverse().join(\\)){
            return true
        }
    }
    return false
};