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
var deepestLeavesSum = function(root) {
    const findHeight = (root) => {
        if (!root){
            return 0;
        }
        
        const leftHeight = findHeight(root.left) + 1, rightHeight = findHeight(root.right) + 1;
        return leftHeight > rightHeight ? leftHeight : rightHeight;
    }
    
    const height = findHeight(root);
    
    const sumDeepestLeaves = (root, curHeight) => {
        if (!root) return 0;
        
        if (!root.left && !root.right){
            if (curHeight == height)
                return root.val;
        }
        
        return sumDeepestLeaves(root.left,curHeight+1) + sumDeepestLeaves(root.right,curHeight+1);
    }
    
    return sumDeepestLeaves(root,1);
};