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
var preorderTraversal = function(root) {
    let arr = []
    if(!root) return []
    arr.push(root.val)
    arr.push(preorderTraversal(root.left))
    arr.push(preorderTraversal(root.right))
    return arr.flat()
};