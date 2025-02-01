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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let seen = new Set()
    function helper(root, k) {
        if (!root) return false
        if (seen.has(root.val)) return true
        seen.add(k - root.val)
        return helper(root.left, k) || helper(root.right, k)
    }
    return helper(root, k)
};