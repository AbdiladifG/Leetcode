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
var sumRootToLeaf = function(root) {
    let arr = []
    function dfs(node, path){
        if(!node) return 
        path +=node.val
        dfs(node.left, path)
        if(!node.left && !node.right)arr.push(path)
        dfs(node.right, path)
    }
    dfs(root, "")
    return arr.map(x=> x=parseInt(x, 2)).reduce((a,c)=> a+c, 0)
};