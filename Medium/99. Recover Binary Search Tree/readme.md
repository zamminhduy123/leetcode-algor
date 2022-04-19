## Thought Process

### First thoughts

My first initial thought was loading the tree into another empty tree, using binary search, but it was wrong all the wau cause it will change the structure of the tree since there's 2 breaking points.

### Bruteforce

At first thought, i was thinking about 2 loop to find the first error place and the second error place. I was thinking about find the node that greater than current node on the left and the node smaller than current node on the right.

My Code starting to beat the test case since the test case was right on for my code, but when i submitted it, there already lots of other case that break my code and tell me what was the wrong-ness of it.

So obviously, i realized that 2 wrong node can stay in the same branch, so that lead my code to break entirely.

So i tried to think about only find the leftMax and rightMin then compare with current node. But that also break as well since there is the same case that 2 wrong node at the same branch can break my code.

### After BruteForce and wrestling so hard with the idea of how to solve this

Again, i have to peek into discussion section for hints. And i saw people working with **inorder traverssal**. That's give me an idea, so if u break the tree down in **inorder traverssal** array, u can see that there will be 2 places that got in the wrong place, cause the right binary tree will place accending with **inorder traverssal**. 

So i tried to think of a solution, at first, using an external array would do the trick. But then i wonder, how can we know the node in the array compare to the tree ?

So there has to be a way to find the breaking place in the tree, and that traverse in **inorder traverssal** way and track the breaking node.

So the first breaking node will be larger than the node after it, cause it can be on the left side of it.

And the second breaking node will be smaller than the node after it, cause it got swapped with the first breaking node.

So with this, i come to a solution. U can read it in the solution.js


## Clean Up Code

Adding swap function