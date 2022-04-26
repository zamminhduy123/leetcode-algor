## Thought Process

At first i know right a way that we have to build a adjacent matrix to store the weight of each egdes visual in the graph by calculating the **mahnhatan distance** between them

This generate will cost O(n^2) sicne the max length is 1000 we can handle this just fine

### Next Step

After having the matrix, we can use multiple algorithms studdied in school to solve this 

There's 2 main algorithm when tackle on this problem which is minimum spanning tree is:
- Kruskal
- Prim 

I chose Prim because i know it better than Kruskal.

So starting off we will have a startNode and start expanding from there, for each node we traverse, we keep track of the minimum edge that we can use for next traverse.

So first i use 2 for loop to find the next minimum edges in the graph, but it was too inefficient. 

	for (int i = 0; i < points.size(); i++){
                if (visited[i]){
                    for (int j = 0 ; j < points.size();j++){
                        if (!visited[j] && matrix[i][j] < min){
                            min = matrix[i][j];
                            y = j;
                        }
                    }
                }   
            }

This cause our algorithm to again find the minimum edges. So its got some duplicate code where we have to again find back the minimum edge.

### Cache the minimum edges

So there's will be a way for us to find the next minimum edge with our current node.

To store all previous edge accendingly we can use **PRIORITY_QUEUE** to handle this. 

So i typedef a new type of datastructure which is **tri**

	typedef pair<int,pair<int, int>> tri;

With this we can store the weight of an edge and 2 node it connect.

Then we just have to push in and pop out then the priority queue will handle the accending order for us

            tri top = pq.top();
            while (!pq.empty() && visited[top.second.second]){
                pq.pop();
                top = pq.top();
            }

When we pop out to find new node, we can check whether we've already visited that node to make sure we don't traverse into the node we already visited.

Then all left is just the normal Prim Algorithm.






