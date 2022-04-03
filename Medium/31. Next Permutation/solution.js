/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortAtRange = (array, start, end) => {
    for (let i = start; i <= end; i++){
        for (let j = i+1; j <= end; j++){
            if (array[i] > array[j]){
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}
var nextPermutation = function(nums) {
    let rightMax = nums[nums.length - 1];
    
    //find the position that has at least one right member that greater than it self
    let i;
    for (i = nums.length - 2; i>=0; i--){
        if (nums[i] < rightMax){
            break;
        } else {
            if (nums[i] > rightMax)
                rightMax = nums[i];
        }
    }
    
    //sort the right postion
    sortAtRange(nums,i+1,nums.length-1);

    //swap it with the member that greater than it but the smallest
    for (let j = i + 1; j < nums.length; j++){
        if (nums[j] > nums[i]){
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            break;
        }
    }
};