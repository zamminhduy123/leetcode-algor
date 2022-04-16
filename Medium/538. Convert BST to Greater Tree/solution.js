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
var convertBST = function(root) {
    const traverse = (root, sum) => {
        if (!root) return;
        
        if (root.right)
            traverse(root.right,sum);

        root.val += sum.s;
        sum.s = root.val;
        
        if (root.left)
            traverse(root.left,sum);
    }
    const sum = { s: 0 };
    traverse(root,sum);    
    return root;
};