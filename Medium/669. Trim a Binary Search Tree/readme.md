## Thought Process

### Initial thought

At first, i tried to think why this is a medium question because trying to balance the tree after deleting a node in binary search tree isn't an easy task, it should be a hard question as far as i'm concerned.

### Peeking Discussion =)) 

So there has to be a way to solve this without balancing the tree after deleting, but i haven't noticed about the range thing after peeking into some discussions in the discussion section =)))).

Sorry, i'm not a best algor out there, but to me, as long as you understand the solution, then either way you learn. So after seeing people saying that the range make it easier to solve because if the node is lower than the range it means that the left node of it will automatically be delete from the tree, cause it will also be lower than the range, and it's the same for the right node. So with that in mind, solving this is pretty easy cause you either choose left or right only, no need to worry about balancing tree. 

So we just need to solve both left and right first, then resolve for the current node. 