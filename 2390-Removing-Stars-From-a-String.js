/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    // if(!s.includes("*")){
    //     return s
    // }else if(s.split("").filter(x=> x !== "*").length == s.length/ 2){
    //     return ""
    // }
    // else{
    //     let star = s.indexOf('*')
    //     return removeStars(s.slice(0, star-1).concat(s.slice(star+1)))
    // }

    let stack = []
    for(let i = 0; i<s.length; i++){
        if(s[i] !== "*" ){
            stack.push(s[i])
        }else{
            stack.pop()
        }
    }
    return stack.join("")
};