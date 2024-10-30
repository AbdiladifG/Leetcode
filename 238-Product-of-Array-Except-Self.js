/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // return nums.map((x,i,arr)=> arr.slice(0, i).concat(arr.slice(i+1)).reduce((a,c)=> a*c, 1))
    let newArr = Array(nums.length).fill(1);
    let num1 = 1
    for (let i = 0; i < nums.length; i++) {
        newArr[i] = num1
        num1 *= nums[i]
    }
    console.log(newArr)
    let num2 = 1
    for (let i = nums.length - 1; i >= 0; i--){
        newArr[i] *= num2
        num2 *= nums[i]

    }
    return newArr
};
