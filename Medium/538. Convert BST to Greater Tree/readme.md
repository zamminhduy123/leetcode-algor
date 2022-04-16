## Thought Process

At first glance, we can already know that the node that's bigger than itself is the node to the right of it. So we just need to visit all the right node and parent node and keep track the sum of the path. Then we plus it to the current node

So the idea is just 

1. Traverse to the right
2. Plus the sum to current node, starting with 0, then update the sum to be the current node
3. Traverse to the left