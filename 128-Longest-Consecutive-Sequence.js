/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let max = 0
    set.forEach(x=>{
        if(!set.has(x-1)){
            let cur = x
            while(set.has(cur+1)){
                cur+=1
            }
            max = Math.max(max,(cur - x) +1 )
        }
    })
    return max
};