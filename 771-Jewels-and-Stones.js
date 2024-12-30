/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let map = {}
    let c = 0
    for(let i = 0; i < jewels.length; i++){
        map[jewels[i]] ? map[jewels[i]] += 1 : map[jewels[i]] = 1
    }
    for( let i = 0; i < stones.length; i++){
        if(map[stones[i]]){
            c++
        }
    }
    return c
};