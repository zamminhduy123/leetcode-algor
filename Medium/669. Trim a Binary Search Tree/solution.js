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
 * @return {TreeNode}
 */

// if the value in range, move on, else, if value < range, choose right, else left
var trimBST = function(root, low, high) {
    if (!root) return null;
    
    root.left = trimBST(root.left,low,high);
    root.right = trimBST(root.right,low,high);
    
    if (root.val >= low && root.val <= high){
        return root;
    } else if (root.val < low){
        return root.right;
    } else {
        return root.left;
    }
};