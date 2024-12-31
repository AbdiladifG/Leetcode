/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let sList = s.split(\ \)
    if(pattern.length !== sList.length) return false
    let map = {}

    for(let i =0; i < pattern.length; i++){
        if(map[pattern[i]] && map[pattern[i]] !== sList[i]){
            return false
        }
        else if(!map[pattern[i]] && Object.values(map).includes(sList[i])){
            return false
        }
        else{
            map[pattern[i]] = sList[i]
        }
    }
    return true


};