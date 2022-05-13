//Solution 1: Using O(n) space and O(n) time 

/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

class Solution {
public:
    vector<vector<Node*>> level;
    
    void traverse(Node* node, int l){
        if (l >= level.size()){
            vector<Node*> newLevel;
            level.push_back(newLevel);
        }
        level[l].push_back(node);
        
        if (node->left){
            traverse(node->left,l+1);
        }
        if (node->right){
            traverse(node->right,l+1);
        }
    }
    
    Node* connect(Node* root) {
        if (!root){
            return nullptr;
        }
        traverse(root,0);
        for (int i = 0 ; i < level.size(); i++){
            for (int j = 0; j < level[i].size() - 1; j++){
                level[i][j]->next = level[i][j+1]; 
            }
        }
        return root;
    }
};