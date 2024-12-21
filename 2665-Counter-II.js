/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let original = init
    return {
        
        increment: function () {
            return ++init
        },
        decrement: function () {
            init = init - 1
            return init
        },
        reset: function () {
            init = original
            return original
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */