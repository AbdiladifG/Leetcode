/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
    let l, r
    let prefixSum = []
    let result = []
    let sum = 0
    let vowels = 'aeiou'
    words.forEach((x, i) => {
        if (vowels.includes(x[0]) && vowels.includes(x[x.length - 1])) {
            sum++
        }
        prefixSum[i] = sum
    })
    queries.forEach((x, i) => {
        [l, r] = queries[i]
        if (l == 0) {
            result.push(prefixSum[r])
        }
        else if (l == r) {
            if (vowels.includes(words[l][0]) && vowels.includes(words[l][words[l].length - 1])) {
                result.push(1)
            }
            else {
                result.push(0)
            }
        }
        else {
            result.push(prefixSum[r] - prefixSum[l-1])
        }
    })
    return result
};