/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        let mid = parseInt((right - left) / 2) + left;
        
        if (nums[mid] === target) return mid;

        
        if (nums[left] <= nums[mid]){
            if (target > nums[mid] || target < nums[left]){
                left = mid + 1;
            } else {
                right = mid -1;
            }
        } else {
            if (target < nums[mid] || target > nums[right]){
                right = mid - 1;
            } else {
                left = mid  +1;
            }
        }
    }
    return -1;
};