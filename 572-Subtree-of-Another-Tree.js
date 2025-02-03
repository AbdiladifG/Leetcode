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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    function same(x, y) {
        if (!x && !y) return true
        if (!x || !y) return false
        if (x.val != y.val) return false
        return same(x.left, y.left) && same(x.right, y.right)
    }
    function dfs(node) {
        if (!node) return false
        if (node.val === subRoot.val) {
            if (same(node, subRoot)) return true
        }
        return dfs(node.left) || dfs(node.right)
    }
    return dfs(root)
};