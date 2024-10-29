/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let num1 = 0
let num2 = 0
var twoSum = function(nums, target) {
    nums.forEach((x,i)=> {
        if(nums.indexOf(target - x) != -1 && nums.indexOf(target - x) != i){
            num1 = i
            num2 = nums.indexOf(target - x)
        }
    })
    return [num1, num2]
};