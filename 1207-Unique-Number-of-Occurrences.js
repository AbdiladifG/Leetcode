/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {}

    for(x of arr){
        obj[x] = obj[x] + 1 || 1
    }

    return new Set(Object.values(obj)).size == Object.values(obj).length
};