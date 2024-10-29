/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let middle = Math.floor(nums.length /2)

    if(target < nums[0]){
            return 0
        }
    else if(target > nums[nums.length -1]){
            return nums.length
        }
    if(nums.length === 1){
        if(nums[0] === target){
            return 0
        }
    }
    else if(target === nums[middle]){
        return middle
    }
    else if(target > nums[middle]){
        let newArr = nums.slice(nums.length/2 + 1)
        return middle + 1 + searchInsert(newArr, target)
    }
    else if(target < nums[middle]){
        let newArr = nums.slice(0, nums.length/2)
        return searchInsert(newArr, target)
    }

};