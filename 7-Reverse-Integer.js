/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negative = x<0
    x = Number(Math.abs(x).toString().split(\\).reverse().join(\\))
    x = negative ? -x : x
    console.log(x)
    if(x < -(2**31) || x > 2**31-1){
        x = 0
    }
    return x
};