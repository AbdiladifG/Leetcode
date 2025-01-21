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
var sumOfLeftLeaves = function(root) {
    let arr = []
    let flag = false
    function leftLeaf(node, flag){
        if(!node) return;
        if(!node.left && !node.right && flag) arr.push(node.val)
        leftLeaf(node.left, true)
        leftLeaf(node.right, false)
    }
    leftLeaf(root)
    return arr.reduce((a,c)=> a+c, 0)
};