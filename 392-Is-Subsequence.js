/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let l1 = 0
    for(let i = 0; i<t.length; i++){
        if(t[i] == s[l1]){
            l1++
        }


    }
    console.log(l1)
    return l1 == s.length
};