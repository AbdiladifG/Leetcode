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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    function dfs(node, result){
        if(!node) return false
        if(node.val == 2){
            return dfs(node.left) || dfs(node.right)
        }
        else if(node.val == 3){
            return dfs(node.left) && dfs(node.right)
        }
        else return node.val == 0 ? false : true
    }
    return dfs(root, true)
};