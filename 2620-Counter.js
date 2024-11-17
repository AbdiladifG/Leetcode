/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // let c = 0
    return function() {
        // let result = n + c   
        // c++ 
        // return result
        return n++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */