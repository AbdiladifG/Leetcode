/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase().split(\ \).join(\\).split(\\).filter(x=> (x >= 'a' && x<= 'z') || (x>= '0' && x<= '9'))
    console.log(str.join(\\))
    console.log(str.reverse().join(\\))
    return str.join(\\) === str.reverse().join(\\) 
};