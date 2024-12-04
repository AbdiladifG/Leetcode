/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0

    for(let i = 0; i <nums.length; i++){
        let right = nums.slice(i+1).reduce((a,c) => a+c, 0)
        if(sum == right){
            return i
        }
        sum += nums[i]
    }
    return -1
};