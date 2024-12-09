/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x = [...new Set(nums)]
    console.log(x)
    for(let i = 0; i < nums.length; i++){
        if(x.includes(nums[i])){
            x.splice(x.indexOf(nums[i]), 1)
        }
        else{
            nums[i] = Infinity
        }
        
    }
    nums.sort((a,b) => a-b)
    
    return nums.filter(x=> x != Infinity).length
};