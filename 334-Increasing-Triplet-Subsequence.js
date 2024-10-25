/**
 * @param {number[]} nums
 * @return {boolean}
 */

var increasingTriplet = function(nums) {
    let num1 = nums[0]
    let num2
    
    for(let i =1; i<=nums.length; i++){
        console.log('i: ', i, ', num1: ', num1, ', num2: ', num2, ', nums[i]: ', nums[i])
        if(num2 > num1 && (nums[i] > num2)){
            return true
        }
        if(nums[i] > num1){
            num2 = nums[i]
        }else{
            num1 = nums[i]
            if(num2 < nums[i]){
                num2 =undefined
            }
        }
    }
    return false
    
};