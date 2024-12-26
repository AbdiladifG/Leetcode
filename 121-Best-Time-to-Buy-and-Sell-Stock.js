/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let lowestPrice = Infinity
    for(let i = 0; i < prices.length; i++){
        // for(let j = 0; j < prices.length; j++){
        //     if(j > i){
        //         if(prices[j] - prices[i] > maxProfit){
        //             maxProfit = prices[j]- prices[i]
        //         }
        //     }
        // }
        if(prices[i] - lowestPrice > maxProfit){
            maxProfit = prices[i] - lowestPrice 
        }
        if(prices[i]< lowestPrice){
            lowestPrice = prices[i]
        }


    }
    return maxProfit
};