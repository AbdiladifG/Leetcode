/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {}
    let sortedArr = strs.map(x=>x.split("").sort().join(""))
    for(let i = 0; i < strs.length; i++){
        if(sortedArr[i] in obj){
            obj[sortedArr[i]].push(strs[i])
        }
        else{
            obj[sortedArr[i]] = [strs[i]]
        }
    }

    return Object.values(obj)
};