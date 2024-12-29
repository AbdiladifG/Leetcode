/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let arr = []
    let num1
    let num2
    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] == \+\ ){
            num2 = arr.pop()
            num1 = arr.pop()
            arr.push(num1 + num2)
        }
        else if(tokens[i] == \-\ ){
            num2 = arr.pop()
            num1 = arr.pop()
            arr.push(num1 - num2)
        }
        else if(tokens[i] == \*\ ){
            num2 = arr.pop()
            num1 = arr.pop()
            arr.push(num1 * num2)
        }
        else if(tokens[i] == \/\ ){
            num2 = arr.pop()
            num1 = arr.pop()
            arr.push(parseInt(num1/ num2));
        }
        else{
            arr.push(parseInt(tokens[i]))
        }
        console.log(arr)
    }
    return arr[0]
};