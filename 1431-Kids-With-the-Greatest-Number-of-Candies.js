/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = []
    for(let i = 0; i< candies.length; i++){
        let num = candies[i] + extraCandies
        candies.filter(x => x > num).length > 0 ? result.push(false) : result.push(true)
    }
    return result
};