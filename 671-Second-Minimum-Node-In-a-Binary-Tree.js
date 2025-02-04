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
var findSecondMinimumValue = function(root) {
    let arr = []
    let q = [root]
    while(q.length != 0){
        let node = q.pop()
        if((!node.left || node.val <= node.left.val) && (!node.right ||node.val <=node.right.val) && node.val != root.val){
            arr.push(node.val)
        }
        if(node.left)q.push(node.left)
        if(node.right)q.push(node.right)
    }
    return Math.min(...arr) == Infinity ? -1 : Math.min(...arr)
};