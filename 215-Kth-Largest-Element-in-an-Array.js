/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //loop thru k/2 times
    //have pointer at left and right
    //remove the MAth.miin and Math.max

    // for(let i = 0; i < k-1; i++){
    //     let big = Math.max(...nums)

    //     nums.splice(nums.indexOf(big), 1)
    // }
    // return Math.max(...nums)
    let sorted = nums.sort((a,b)=> b-a)
    console.log(sorted)
    return sorted[k-1]
};