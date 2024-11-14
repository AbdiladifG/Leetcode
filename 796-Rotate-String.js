/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let l = goal.split("")
    for(let i = 0; i< goal.length; i++){
        if(l.join("") === s) return true
        let x = l.pop()
        l.unshift(x)
    }

    return l.join("") === s

};