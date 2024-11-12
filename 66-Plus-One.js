/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    console.log((BigInt(digits.join("")) + BigInt(1)).toString())
    return (BigInt(digits.join("")) + BigInt(1)).toString().split("").map(x=> Number(x))
};