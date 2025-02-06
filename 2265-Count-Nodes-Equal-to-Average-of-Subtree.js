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
 * @return {number}
 */
var averageOfSubtree = function (root) {
    let c = 0

    function dfs(node) {
        if (!node) return [0, 0]
        let [sum1, count1] = dfs(node.left)
        let [sum2, count2] = dfs(node.right)
        
        let totals = sum1 + sum2 + node.val

        let totalc =  count1 + count2 + 1

        if (Math.floor(totals / totalc) == node.val) c++

        return [totals, totalc]
    }

    dfs(root, 0)
    return c
};