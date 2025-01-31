/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let stack = [root]
    let arr = []
    while (stack.length != 0) {
        let levelSize = stack.length
        let avg = stack.map(x => x.val).reduce((a, c) => a + c, 0) / stack.length
        arr.push(avg)
        for (let i = 0; i < levelSize; i++) {
            let cur = stack.shift()
            if (cur.left) stack.push(cur.left)
            if (cur.right) stack.push(cur.right)
        }
    }
    return arr
};