## Thought Process

This is as simple as finding an element in a binary tree. My thought was just traverse Left-Node-Right and then decrease k each time we traverse from low to top until k = 0 then we return the value of that node

## Clean up code

So i tried to pass an object that contain k into the function traverse to try to (pass-by-reference) but after that i remember about javascript closure, so we just need to not pass k in the function and we can get access to k outside the function. Then k act like it got pass by reference.

