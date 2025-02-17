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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = 0
    let c = 0
    function inorder(node){
        if(!node) return 
        inorder(node.left)
        c++
        if(c == k){
            return res = node.val
        }
        inorder(node.right)
    }
    inorder(root)
    return res
};