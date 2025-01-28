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
var getMinimumDifference = function(root) {
    let min = Infinity
    let prev = [null]
    function dfs(root){
        if(!root) return
        dfs(root.left)
        if(prev[0] !== null){
            min = Math.min(Math.abs(prev[0] - root.val), min)
        }
        prev[0] = root.val
        dfs(root.right)
    }
    dfs(root)
    return min
};