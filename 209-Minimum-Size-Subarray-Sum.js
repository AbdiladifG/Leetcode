/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0
    let sum = 0
    let minlen = Infinity
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        if(sum >= target){
            while(sum - nums[start] >= target){
                sum -= nums[start]
                start++
            }
            minlen = Math.min(minlen, (i-start + 1))
        }
    }
    return minlen === Infinity ? 0 : minlen
};