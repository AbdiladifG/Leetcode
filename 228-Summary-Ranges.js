/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let arrs = []
    let l = 0
    for(let i = 1; i < nums.length+1; i++){
        if(nums[i -1] + 1 !== nums[i]){
            if(nums[l]==nums[i-1]) arrs.push([nums[l]])
            else arrs.push([nums[l],\->\, nums[i-1]])
            l = i
        }
    }
    return arrs.map(x=> x.join(\\))
};