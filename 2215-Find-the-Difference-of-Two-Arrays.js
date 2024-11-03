/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let l1 = []
    let l2 = []

    nums1.map(x=>{
        !nums2.includes(x) ? l1.push(x) : x
    })
    nums2.map(x=>{
        !nums1.includes(x) ? l2.push(x) : x
    })


    return [[...new Set(l1)], [...new Set(l2)]]
};