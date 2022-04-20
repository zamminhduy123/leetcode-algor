## Thought Process

This is a tricky question, normally we often traverse BST by recursion. That's when we can access to its child of a node and also can get back to that node. But this question is different, there's no way we can get back to the parrent node by traversing.

### Easy solution

So one easiest solution would be using an external array and traverse the tree then push element into array by inorder traversal, and just by that we jsut need to keep track of the array.

### O(1) time and O(h) space

The problem is we have to keep the next() and hasNext() method in O(1) time and O(h) space.

So i was currious about

### Why is O(h) space which is the tree height ?

At first it didn't hit me with any solution, but after peeking the discussion **NOT CHECKING FOR OTHERS SOLUTION OBVIOUSLY*, i saw people using the tag **STACK**, and that generate an idea for me about why they using stack.

After a while, i noticed that we can store it's parrent node in a stack when we traverse. Then i start developing my solution

### Solution

First we jump into the left most node, we store all of it parrent node in a stack

Then after call Next(), we pop out the node, perform value return, and then, we check if there's any right child of that node, then we jump into that child and perform the **left_most** again. 

Then just by that, we just need to keep track of that stack and keep pushing new node in, so maxium size of the stack always = tree height.

And perform push, pop, empty functions on stack cause O(1) time 


## Clean Up Code

Adding function to add most left into the stack (reusable code)

Making internal process as private variables and functions