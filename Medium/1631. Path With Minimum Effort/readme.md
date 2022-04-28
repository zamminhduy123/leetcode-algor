# Thought Process

First this is quite like a BFS problem, but after read it thoroughly, this question is a bit harder then normal BFS problems.

So the hint number 3 is suggesting using Binary search to find the lowest maximum absolute difference **(effor)** in the path we traverse.

So if we just do regular DFS/BFS traverse, it's really hard to find the maximum diff between to 2 node in our path.

# Engaging idea

It's quite easy to perform DFS and BFS traverse in this 2D Matrix.

	const adjacent = [[0,1],[1,0],[-1,0],[0,-1]];
	for (const adj of adjacent){
            let newX = x + adj[0],
                newY = y + adj[1];
            if (newX >= 0 && newX < visited.length && newY >= 0 && newY < visited[x].length) {
                if (!visited[newX][newY] && Math.abs(heights[newX][newY]-heights[x][y]) <= k) {
                    if (dfs(newX,newY,k,visited)){
                        return true;
                    }
                }
            }
        }

So the **k** we pass into our traverse is actually our maximum absolute difference we allow it to traverse. 

# So how can we find the k to pass into our traverse to check?

It's quite a problem, so i went on discussion to see how people pass in the K. Obviously with the binary search online. But first i thought we gonna define the range ourself. But nah, they use the range of given maximum input

	let low = 0, high = 1e6

And the making binary search for the smallest acceptable K to traverse.

the DFS cost us O(n^2) for worst case and Binary Search is O(log(10^6))

# so this algorithm cost us **O(n^2log(1e6))** 

Quite a slow algorithm.

# So i saw people using Dijkstra algorithm and i went to check if that fit our problem

Thinking back of the Dijkstra, we can see that it pick the smallest path for each traverse it make to the queue.

So it always find the minimum path the the destination, so in that case, the absolute difference will be smallest

... To be defined



