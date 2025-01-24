/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let result = null
    function dfs(original, cloned){
        if(!original && !cloned) return
        if(cloned.val == target.val){
            result = cloned
            return 
        }
        dfs(original.left, cloned.left)
        dfs(original.right, cloned.right)
    }
    dfs(original, cloned)
    return result
};