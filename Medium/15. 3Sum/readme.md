## Thought Process

### Bruteforce

You can ez solve this by using 3 for loop which result in O(n^3) time complexity

### Still bruteforce but better

You can think that if this array is sorted, at one index in the array there has to be the element on the right which is larger then it and the left one which is smaller than its self.

So to calculate 0 you will need to traverse to right or left depends on current sum > 0 or < 0.

You will understand when you see the code, it's pretty easy