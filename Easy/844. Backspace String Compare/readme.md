# Thought Process

Easy solution implementing stack

1. if isLowerCaseWord() push into stack else pop out stack
2. compare 2 stack

## O(n) time and O(n) space

# Follow up

Follow up question ask to solve this with O(n) time and O(1) space solution

We can move 2 pointer from the back of the string, keep track of the '#' character

1. if we meet a word, we check the counter of '#', if it's greater than zero, we skip that character
2. if we meet a '#', we plus 1 into the counter and move on
3. if both are word and the counter both zero, we compare 2 words

Easy solution implementations.