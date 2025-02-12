/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = []
    let set = new Set(nums)
    for(let i = 1; i < nums.length+1; i++){
        if(!set.has(i)) arr.push(i)
    }
    return arr
};
