# Thought Process

First i tried to think why this is a **MEDIUM** problem. 

Cause my first ever solution is pretty easy to see, we just need to: 
1. sort the array to accending order. 
2. Then we find the breaking point of left and right where new sorted array different from the original one.

The worst case for this is O(n^2) since most of the current sort got worst case of O(N^2)

# Follow up

The follow up is a real challenge where the problem deserve a medium rank, we need to solve this problem with cost of only O(n) time which means we cannot sort the array.

So i tried to find the breaking point of left and right but there will be a case where left and right breaking point is not the real **breaking point** since the array can be like

	const arr = [1,2,3,4,3,2,1] 

where the breaking point is in the middle but we need to sort almost all of the array since 1 which is min stay in the last position.

### Breaking point found using nums[i] > nums[i+1]

# Second thought

So i found a solution, which is find the breaking point of left and right

Then find max and min of the breaking point, then compare linear with the original array to find the **REAL BREAKING POINT** 

it's hard to explain but the solution came like this

	let min = nums[l], max = nums[l];
        
        for (let i = l + 1; i <= r; i++){
            if (nums[i] < min) min = nums[i];
            if (nums[i] > max) max = nums[i];
        }
        
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

where l and r is the first breaking point we found using the nums[i] > nums[i+1]

# Worst case O(N) time and O(1) space

Since we only traverse array 1 time for each loop and the total of traverse is 3 which can be minimize to O(n)

## Clean up

The final solution came out quite dirty and hard to read, so i tried to fix and bring every loop into 1 loop only. More efficient and easier to read.