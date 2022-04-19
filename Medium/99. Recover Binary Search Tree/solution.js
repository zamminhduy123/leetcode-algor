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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    
    //swap 2 node value
    const swap = (node1, node2) => {
        let temp = node1.val;
        node1.val = node2.val;
        node2.val = temp;
    }
    
    let first = null, second = null, before = null;
    
    const findMistakes = (node) => {
        if (node.left) {
            findMistakes(node.left);
        }
        
        if (before){
            if (!first && before.val > node.val){
                first = before;
            } 
            if (first && before.val > node.val) {
                second = node;
            }
        }
        before = node;
        
        if (node.right) {
            findMistakes(node.right);
        }
    }
    
    findMistakes(root);
    swap(first,second);
};