/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map =new Map()

    for(let x of nums){
        map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1)
    }
    
    return [...map].sort((a,b)=> b[1] - a[1]).map(x=> x[0]).slice(0,k)

};