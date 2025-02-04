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
var findMode = function(root) {
    let obj = {}
    function dfs(node){
        if(!node) return
        obj[node.val] ?obj[node.val]++ : obj[node.val] = 1
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    let max = Math.max(...Object.values(obj))
    return Object.entries(obj).filter(x=>x[1]==max).map(x=>Number(x[0]))
};