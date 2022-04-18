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
    var find = (root) => {     
        let res = -1;
        
        if (root.left) res = find(root.left,k);
        if (res !== -1) return res;
        
        k--;
        if (k === 0){
            return root.val;
        }
        
        if (root.right) res = find(root.right,k);
        
        return res;
    }
    return find(root);
};