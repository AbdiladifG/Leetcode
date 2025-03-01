/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let lca = root
    function dfs(node){
        if(!node) return 
        if(p.val < node.val && q.val < node.val){
            lca = node.left
            dfs(node.left)
        }
        else if(p.val > node.val && q.val > node.val){
            lca = node.right
            dfs(node.right)
        }
        else{
            return
        }
    }
    dfs(root)
    return lca
};