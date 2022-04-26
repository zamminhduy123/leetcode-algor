/**
 * @param {number[]} nums
 * @return {number}
 */

// 2 pointers solution
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

//Kadane: Divided and Conquer Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let newNums = [];
    let max = nums[0];
    newNums.push(nums[0])
    for (let i= 1; i < nums.length; i++){
        let temp = nums[i] + newNums[i-1];
        newNums[i] = temp < nums[i] ? nums[i] : temp;
        if (newNums[i] > max)
            max = newNums[i];
    }
    return max;
};