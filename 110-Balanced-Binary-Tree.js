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
var isBalanced = function(root) {
    if(!root) return true
    function findDepth(root){
        if(!root) return 0;
        return Math.max(findDepth(root.left), findDepth(root.right)) + 1 
    }

    if(Math.abs(findDepth(root.left)- findDepth(root.right))> 1){
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right)
};