## Thought Process

### Bruteforce

Every problem that i faced, i always try to bruteforce it first. Bruteforce this is pretty easy since you have to loop throught the array and find the left and right wall of the container.

So the way to find the result is simply run 2 for-loop, check the area between 2 pointer and compare it with max. Then return the max.

Example code:

    for (let i = 0; i < size; i++){
        for (let j = i+1; j < size; j++) {
            //get left and right, calculate area then compare to max
        }
    }

The Complexity time is O(n^2) since each iteration we loop through the array once.

### After BruteForce

After the engage with bruteforce, i realize that you only need to worry about the shorter wall of the container because water over the shorter flow will spill out. So in order to get a bigger area we need to find a taller wall and replace it with the current shorter one. 

First we will start with the longest width which is the wall at first & last position. Then we just have to find the correct one to replace the shorter one of them all. 

So i tried using for loop to loop and track the shorter one to replace it. But i kept bugging me out because it will try to find the longest wall but not compromising with the width.

Then i finally got the idea of using 2 pointer which is the shorter wall pointer will move and then re-calculate the area. Because we don't need to keep track of the walls, we just need to keep track of the area. So we just have to move 2 pointer from left to right closer to mid until left no longer < right.

See the solution source code for more details

The Complexity time is O(n) since we move two pointer from each side to the middle which equal to one time looping through the array. 

## Clean Up Code

So after getting the code works, i seperate the if case to compare and get the shorter wall into a min function and also a max function to compare max area.

Then change the code from i and j to left and right for everybody to understand it easier