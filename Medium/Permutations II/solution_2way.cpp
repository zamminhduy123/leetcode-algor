// solution 1: bruteforce backtracking and using a set to filter 

class Solution {
public:
    set<vector<int>> res;
    vector<int> nums;
    
    void permu(int index,vector<int> current,vector<bool>visited){
        if (index == current.size()){ 
            res.insert(current);
            return;
        }
        for (int i = 0; i < nums.size(); i++){
            if (!visited[i]){
                visited[i] = true;
                current[index] = nums[i];
                
                permu(index+1,current,visited);
                
                visited[i] = false;
            }
        }
        
    }
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        this->nums = nums;
        vector<bool> visited(nums.size(),false);
        vector<int> current(nums.size(), 0);
    
        permu(0,current,visited);
        
        vector<vector<int>> result;
        for (auto x : res){
            result.push_back(x);
        }
        return result;
    }
};

// solution 2: Backtracking using map for optimization and filter out the duplicates

class Solution {
public:
    vector<vector<int>> res;
    map<int,int> m;
    
    void permu(int index, vector<int>current) {
        if (index == current.size()){ 
            res.push_back(current);
            return;
        }
        for (auto const& [key, val] : m)
        {
            if (val > 0){
                current[index] = key;
                m[key]--;
                permu(index+1,current);
                m[key]++;
            }
        }
    }

    vector<vector<int>> permuteUnique(vector<int>& nums) {
        for (auto num : nums){
            m[num]++;
        }
        
        vector<int> current(nums.size(), 0);
        permu(0,current);
        return res;
    
    }
};