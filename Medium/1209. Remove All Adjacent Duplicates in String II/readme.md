# Thought Process

i solved this problem 1 year ago. This solution bearly make it with 9869 ms

Just simply maintain the continuous count, if it exceed K then we cut the array and re-operate from the beginning. 

So this solution will cost O(n^2) cause we traverse all the way from the front after trimming the string

# More info

I tried to implement the stack way but cannot make it throught Memory Limit Exceed

The stack way i implemented would be using 2 stack, 1 push the current s[i] in and 1 track the count of current continuous character.

If reaching K continuous chars, we pop K element out and also pop the count stack out