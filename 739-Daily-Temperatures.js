/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temp) {
    // for(let i = 0; i < temp.length; i++){
    //     let r = i+1
    //     while(temp[r] <= temp[i] && r < temp.length){
    //         r++
    //     }
    //     if(r == temp.length)temp[i] = 0
    //     else temp[i] = r - i
    // }
    // return temp

    let stack = []
    let result = new Array(temp.length).fill(0)
    for (let i = 0; i < temp.length; i++) {
        if (stack.length != 0 && temp[i] > stack[stack.length - 1][0]) {
            while (stack.length != 0 && temp[i] > stack[stack.length - 1][0]) {
                let x = stack.pop()
                result[x[1]] = i - x[1]

            }
            stack.push([temp[i], i])
        }
        else {
            stack.push([temp[i], i])
        }
    }
    return result
};