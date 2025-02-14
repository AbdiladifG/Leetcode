/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let map = new Map()
    let max = 0
    for (let x of nums) map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
    console.log(map)
    map.forEach(x=>{
        if (map.has(Number(x) + 1)){
            max = Math.max(max, map.get(Number(x)) + map.get(Number(x) + 1))
        }
    })


    return max
};