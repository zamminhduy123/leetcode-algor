//Solution 1: O(n^3) Easiest 3 for so i don't provide the solution here

//Solution 2: O(n^2) time: Track the min then find mid and right

//way 1: Using 1 for to traverse the mid, 1 for the find the min in LEFT SIDE, 1 for to find if last element exist in the pattern 

//O(n^2) time, O(1) space

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    for (let i = 1; i < nums.length-1 ;i++){
        let leftMin = nums[i-1], rightMax = Number.MIN_NUM;
        
        for (let j = 0; j < i;j++){
            if (nums[j] < leftMin){
                leftMin = nums[j];
            }
        }
        
        for (let j = i+1; j < nums.length;j++){
            if (nums[j] < nums[i] && nums[j] > leftMin){
                return true;
            }
        }
    }
    return false;
};


// way 2: Track the min when we pass throught, then use 1 for to find the right element

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let curMin = Number.MAX_VALUE;
    for (let i = 0; i < nums.length-1;i++){
        if (nums[i] < curMin) curMin = nums[i];
        for (let j = i+1; j < nums.length;j++){
            if (curMin < nums[j] && nums[j] < nums[i]){
                return true;
            }
        }
    }
    return false;
};

// Solution 3: O(n) time with O(n) space

class Solution {
public:
    bool find132pattern(vector<int>& nums) {
        vector <int> p(nums.size(),0);
        int min = nums[0];
        
        stack <int> right;
        
        for (int i = 0; i < nums.size(); i++){
            if (nums[i] < min){ 
                min = nums[i];
            }
            p[i] = min;
        }
        
        for (int i = nums.size() - 1; i >= 0; i--){
            if (nums[i] > p[i]){
                if (right.empty() || right.top() > nums[i])
                    right.push(nums[i]);
                
                while (!right.empty() && right.top() <= p[i]){
                    right.pop();
                }
                
                if (!right.empty() && right.top() < nums[i]) return true;
            }
        }
        return false;
    }
};