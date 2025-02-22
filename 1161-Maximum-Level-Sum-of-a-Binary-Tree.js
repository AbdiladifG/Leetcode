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
var maxLevelSum = function(root) {
    let max = root.val
    function dfs(node, level, paths){
        if(!node) return paths;
        if (paths.length <= level) paths.push([]);
        paths[level].push(node.val)
        dfs(node.left, level+1, paths)
        dfs(node.right, level+1, paths)
        return paths
    }
    let paths = dfs(root, 0, [])
    paths = paths.map(x=> x.reduce((a,c)=> a+c, 0))
    return paths.indexOf(Math.max(...paths)) + 1
    
};