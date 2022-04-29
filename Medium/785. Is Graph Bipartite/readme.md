# Thought Process

At first, i thought it was easy because there will be 2 seperated field already in the input, so then i just have to check if there's more than 2 set of connected node in the graph.

I was stupid and naive =)), i think it was like this: **[[1,2,3],[0],[0],[0]]** and there will be 2 seperated set of connections.

Then i went on apply this check is just simply toString all the array then check the SET size. If it's bigger than 2 then it's false.

# Re-think

Yeah i know, it was stupid me =))

But after getting Error when submitted. The input changed my mind, i started to realize that there isn't all connection to all node, like there can be node that ain't connect and node that don't connect to all node in other section. As long as all the edge still connect 2 side of the partitions.

# New strategy

So each edge will connect 2 node of 2 partitions. This help me realize that i can just put them into 2 partition and check for duplicate in each partition.

If the current node is in the LEFT side, then put all connected node to the RIGHT. If found any duplicated nodes, then return false immedietly. Simple as that, i use recursion to do the jumping stuff

# steps

1. Start at left, push new node to right, check the visited of current node
2. change side, if not visited, recur to the node and switch the current side.
3. continue till end

4. run the other seperate for-loop to check whethere there's any node left to check. if empty continue, else back to step 1 with that node.

## clean up

Put code in seperate sections, adding case for 1 and 2 nodes only.