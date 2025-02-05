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
var deepestLeavesSum = function(root) {
    let sum = 0
    let max = 0

    function dfs(node, level){
        if(!node) return
        if(max < level){
            sum = node.val
            max = level
        }
        else if(max == level){
            sum+=node.val
        }
        dfs(node.left, level+1)
        dfs(node.right, level +1)
    }
    dfs(root, 0)
    return sum
};