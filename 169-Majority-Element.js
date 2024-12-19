/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}

    for(num of nums){
        obj[num] = obj[num]+1 || 1
    }
    console.log(Object.values(obj))
    let most = 0
    let mostNumber = 0 
    for(x in obj){
        if(obj[x] > most){
            most = obj[x]
            mostNumber = x
        }
    }
    return Number(mostNumber)
};