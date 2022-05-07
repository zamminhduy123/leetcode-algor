# Thought Process

##	Brute Force

Easiest Bruteforce u can think of right a way is 3 for loop. 
Simple like this:
	
	i: 0 -> n-2
	j: i+1 -> n-1
	k: j+1 -> n

then just find the nums[i] < nums[k] < num[j] pattern

##	Better Bruteforce

### Way 1

Traverse throught the array: this one we use to track the middle point

Then for each middle point, we use 2 for loop to track left and right

	j: 0->i-1
	i: 1->n-1
	k: i+1->n

Then we find min in left side, and the fit k in the right side which is > nums[i] and < min left side

### Way 2: Better a bit

We can terminate the loop we use to find the min on the left side by tracking it as we traverse with the middle point. If middle point < min left side then we just update the min left side.

Then use the same right side for loop to find the last element.

##	Most optimal solution that i read online

### Using Stack

First we need a min array as we traverse through the array we keep track of the min array of 1 -> i (current). 

The key point here is use the stack, as we want to track the minimum element from the right side but it has to be greater than the left side min and smaller than the middle one.

So we traverse back from the end, each time we meet a smaller nums[i], we push into stack then we track if stack.top() is smaller than the minimum on left side, if so, we pop out the stack until we got the greater element to the left minimum.

## This optimal solution will cost O(n) time and O(n) space

You can view the solution for more depth into the code