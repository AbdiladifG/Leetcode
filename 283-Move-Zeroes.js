/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length <= 1 || !nums.find(x=> x>0)) return nums
    let num1 = 0
    let num2 = 0
    let temp
    while(num2 < nums.length){
        if(nums[num2] !== 0){
            temp = nums[num1]
            nums[num1] = nums[num2]
            nums[num2] = temp
            num1++
            num2++
        }
        else if(nums[num1] == 0 &&nums[num2] == 0) {
            num2++
        }
        else if(num1 == num2){
            num2++
        }
    }
    return nums
};
