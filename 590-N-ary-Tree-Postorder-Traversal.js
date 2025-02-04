/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let arr = []
    function dfs(node){
        if(!node) return
        for(let x of node.children){
            dfs(x)
        }
        arr.push(node.val)
    }
    dfs(root)
    return arr
};