/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if(digits.length == 0) return []
    let m = {
        \2\: \abc\,
        \3\: \def\,
        \4\: \ghi\,
        \5\: \jkl\,
        \6\: \mno\,
        \7\: \pqrs\,
        \8\: \tuv\,
        \9\: \wxyz\
    }
    let arr = []
    function backtrack(i, comb){
        if(i == digits.length){
            arr.push(comb)
            return
        }

        m[digits[i]].split(\\).forEach(x=>{
            backtrack(i+1, comb + x)
        })
    }
    backtrack(0, \\)
    return arr


};