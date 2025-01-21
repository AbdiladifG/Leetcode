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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0
    function dfs(node){
        if(!node) return;
        if(node.val >= low && node.val <= high) sum += node.val
        if(node.val < low){
            dfs(node.right, sum) 
        }       
        else if(node.val > high){
            dfs(node.left, sum) 
        }
        else{
            dfs(node.left, sum) 
            dfs(node.right, sum) 

        }     
        
        
    }
    dfs(root)
    return sum
};