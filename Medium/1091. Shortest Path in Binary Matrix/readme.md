# Thought Process

Matrix traverse is simply DFS or BFS

With this problem we need to find the shortest path in MATRIX which BFS is the best fit for 2D matrix shortest path rather than DFS

So implement normal DFS would be really easy

1. Push the first [0,0] into queue
2. Pop it out, get all the adjacent node in the queue that satisfy the constraints
3. Each time we push into the queue, we have to run the code while pop it all out, to keep tracking of the total amount of step.

Check the code for more depth.

## Complexity of BFS would be O(n*n) since worst case is traverse all the matrix.

