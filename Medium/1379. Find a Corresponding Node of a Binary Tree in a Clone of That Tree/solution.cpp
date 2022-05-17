/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
public:
    TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) {
        if (!original)
            return nullptr;
        
        if (original->val == target->val){
            return cloned;
        }
        
        TreeNode* res = nullptr;
        
        if (original->left)
            res = getTargetCopy(original->left,cloned->left,target);
        
        if (res != nullptr)
            return res;
            
        if (original->right)
            res = getTargetCopy(original->right,cloned->right,target);
        
        return res;
    }
};