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
class BSTIterator {
private:
    TreeNode* current;
    stack <TreeNode*> parrent;
    
    void mostLeft(TreeNode* node) {
        while (node){
            parrent.push(node);
            current = node;
            node = node->left;
        }
    }
public:
    BSTIterator(TreeNode* root) {
        mostLeft(root);
    }
    
    int next() {                
        int res = current->val; 
        
        parrent.pop();
        
        if (current->right){
            mostLeft(current->right);
        }
 
        if (!parrent.empty())
            current = parrent.top();
        
        return res;
    }
    
    bool hasNext() {
        return !parrent.empty();
    }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator* obj = new BSTIterator(root);
 * int param_1 = obj->next();
 * bool param_2 = obj->hasNext();
 */