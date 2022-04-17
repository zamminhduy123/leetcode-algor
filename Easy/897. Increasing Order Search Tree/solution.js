/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void increasingTree(TreeNode* root, TreeNode* &ICT,TreeNode* &head){
        if (!root) return;
        
        if (root->left) 
            increasingTree(root->left, ICT, head);
        
        if (!ICT){
            ICT = new TreeNode(root->val);
            head = ICT;
        } else {
            ICT->right = new TreeNode(root->val);
            ICT = ICT->right;
        }
        
        if (root->right)
            increasingTree(root->right, ICT,head);
    }
    
    TreeNode* increasingBST(TreeNode* root) {
        TreeNode* newRoot = nullptr, *cur = nullptr;
        increasingTree(root,cur,newRoot);
        return newRoot;
    }
};