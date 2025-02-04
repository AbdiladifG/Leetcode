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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let head = new TreeNode()
    let cur = head
    function inorder(node){
        if(!node) return
        inorder(node.left)
        cur.right = new TreeNode(node.val)
        cur = cur.right
        inorder(node.right)
    }
    inorder(root, head)
    return head.right
};