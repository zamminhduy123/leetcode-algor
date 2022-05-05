/**
 * @param {number[]} nums
 * @return {number}
 */

//solution 1: Worst Case O(n^2) time and O(n) space

var findUnsortedSubarray = function(nums) {
    //copy to new array
    const newArray = [...nums];
    //sort new array
    newArray.sort((a,b) => a-b);
    
    //find the different left and right
    let l = 0, r = nums.length-1;
    let left_stop = false,right_stop = false;
    while (l < r){
        if (nums[l] == newArray[l]){
            l++;
        } else {
            if (right_stop) 
                break;
            else 
                left_stop = true;
        }
        if (nums[r] == newArray[r]){
            r--;
        } else {
            if (left_stop) 
                break;
            else 
                right_stop = true;
        }
    }
    //if found, return length, else 0
    return l < r ? r - l + 1 : 0;
};

//solution 2: Worst Case O(n) time and O(1) space

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let l = -1, r = nums.length - 1;
    
    //find breaking point of left and right
    for (let i = 0 ; i < nums.length - 1; i++){
        if (nums[i] > nums[i+1]) {
            if (l == -1){
                l = i;
                r = i+1;
            } else {
                r = i+1;
            }
        }
    }
    
    //if found, find min and max then find the real breaking point
    if (l != -1) {
        let min = nums[l], max = nums[l];
        
	//find min and max
        for (let i = l + 1; i <= r; i++){
            if (nums[i] < min) min = nums[i];
            if (nums[i] > max) max = nums[i];
        }
        
	//find real breaking point using min and max
        let left = 0, right = nums.length-1;
        
        while (right > left){
            if (nums[left] > min && nums[right] < max){
                return right-left+1;
            } else {
                if (nums[left] <= min){
                    left++;
                }
                if (nums[right] >= max){
                    right--;
                }
            }
        }
    } else {
        //if not found, array sorted right, return 0
        return 0;
    }
};