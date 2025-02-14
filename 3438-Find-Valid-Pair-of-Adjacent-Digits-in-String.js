/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
    let map = new Map()
    let res = ""
    for(x of s){
        map.has(x) ? map.set(x, map.get(x)+1) : map.set(x, 1)
    }
    for(let i = 0; i<s.length-1; i++){
        if(s[i]!=s[i+1] && map.get(s[i]) == Number(s[i]) && map.get(s[i+1]) == Number(s[i+1])){
            res = s[i]+s[i+1]
            break
        }
    }
    return res
};