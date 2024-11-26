/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let curAlt = 0
    let highest = 0
    for(x of gain){
        curAlt+=x
        console.log(curAlt)
        curAlt > highest ? highest = curAlt : highest = highest
    }

    return highest
};