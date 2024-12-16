/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let c = 0
    nums.forEach(x=> x !== val ? c++ : x)

    nums.forEach((x, i)=> x ==val ? nums[i] = '_' : x)
    nums.sort()
    return c
};