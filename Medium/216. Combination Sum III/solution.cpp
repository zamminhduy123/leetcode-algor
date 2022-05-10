class Solution {
public:
    vector<vector<int>> solution;
    
    void recursion(int k, int n, vector<int> cur, int step) {
        if (n == 0 && k == 0){
            solution.push_back(cur);
            return;
        }
        for (int i = step; i <= 9; i++){
            if (n-i >= 0 && k > 0){
                cur.push_back(i);
                recursion(k-1,n-i,cur,i+1);
                cur.pop_back();
            }
        }
    }
    
    vector<vector<int>> combinationSum3(int k, int n)       {
        if (n<=k){
            return {};
        }
        vector<int> cur;
        recursion(k,n,cur,1);
        return solution;
    }
};