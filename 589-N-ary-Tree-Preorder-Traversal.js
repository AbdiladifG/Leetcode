/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let arr = []
    function dfs(node){
        if(!node) return
        arr.push(node.val)
        for(let x of node.children){
            dfs(x)
        }
    }
    dfs(root)
    return arr
};