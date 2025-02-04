/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function dfs(node, arr){
        if(!node) return arr
        dfs(node.left, arr)
        if(!node.left && !node.right) arr.push(node.val)
        dfs(node.right, arr)
        return arr
    }
    return dfs(root1, []).join(",") === dfs(root2, []).join(",")
};