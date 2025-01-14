/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let seenA = new Set()
    let seenB = new Set()
    let sum = 0
    let prefixSum = []

    for (let i = 0; i < A.length; i++) {
        seenA.add(A[i])
        seenB.add(B[i])

        if (A[i] == B[i]) {
            sum++
        }
        else {
            if (seenA.has(B[i])) {
                sum++
            }
            if (seenB.has(A[i])) {
                sum++
            }
        }
        prefixSum.push(sum)
    }
    return prefixSum
};