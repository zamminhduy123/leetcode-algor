/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    
    const set = new Set();

    console.log(nums);
    
    for (let i = 1; i < nums.length-1;i++){
        let left = i - 1, right = i + 1;
        while (left >= 0 && right < nums.length) {
            const sum = nums[left] + nums[i] + nums[right];
            if (sum === 0) {
                set.add(JSON.stringify([nums[left],nums[i], nums[right]]));
                left--;
            } else if (sum > 0) {
                left--;
            } else {
                right++;
            }
        }
    }
    
    return Array.from(set).map(el => JSON.parse(el));
};