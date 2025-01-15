/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let sum = 0
    let prefixSum = []
    for(let i = 0; i < nums.length; i++){
        sum+=nums[i]
        prefixSum.push(sum)
    }
    this.sums = prefixSum
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let leftSum = left == 0 ? 0 : this.sums[left-1]
    let rightSum = this.sums[right]
    return rightSum - leftSum
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */