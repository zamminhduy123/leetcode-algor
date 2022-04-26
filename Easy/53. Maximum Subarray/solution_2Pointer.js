/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let left = 0, right = 0;
    let sum = 0, max = nums[0];
    
    while (right < nums.length){
        sum+=nums[right];
        right++;
        if (sum>max){
            max = sum;
        }
        
        //if sum < 0, we increase the left side
        while (sum < 0 && left <= right){
            sum -= nums[left];
            left++;
        }
    }
    return max;
};