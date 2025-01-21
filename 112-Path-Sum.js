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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    function dfs(node, sum, target){
        if(!node) return false;
        sum+= node.val
        if(sum == target && !node.left && !node.right) return true
        return dfs(node.left, sum, target) || dfs(node.right, sum, target)
    }
    return dfs(root, 0, targetSum)
};