/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let last = nums.length - 1; // Start at the last index
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= last - i) {
            last = i; // Update `last` to the current index if it can jump to or beyond the current `last`
        }
    }
    return last === 0; // Check if `last` moved all the way to the start
};