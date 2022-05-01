# Thought Process

Each time i saw a left and right with a value, immedietly think about graph solutions.

It would be a pretty easy to solve problem because we just need to use DFS with each **queries** and try to find if there's any way from start node to end node then multiply all of them together.

The hard thing in the other hand is trying to find a way to store node as **String**. Normally we always store node as number so we can easily store it in the matrix 2D array or something else.

So i tried to look for a solution to store it, and i successfully test it out with map and 2D array

the map allow us to store key as string value, and the 2D array represent the adjacent list which connect to that node.

	// Map string to a map of string and double
    	const map = new Map();
    	for (let i = 0; i < equations.length; i++){
        	let temp = map.get(equations[i][0]), newMapValue = [equations[i][1],values[i]];
    	
        	if (!temp){
            		map.set(equations[i][0], [newMapValue]);
        	} else {
            		map.set(equations[i][0], [...temp, newMapValue]);
        	}
        
        let temp_2 = map.get(equations[i][1]), newMapValue_2 = [equations[i][0],(1.0/values[i])];
    	
        	if (temp_2 == undefined){
         	   map.set(equations[i][1], [newMapValue_2]);
        	} else {
          	  map.set(equations[i][1], [...temp_2, newMapValue_2]);
        	}
    	}

- temp is for that node to other node in equation with value
- temp 2 is for the other node to that node in equation with 1/value

So with this we can easily navigate using DFS approach 

	const dfs = (start,end,visited) => {
        	const mapValue = map.get(start);
        	if (!mapValue) return -1;
        
        	visited.set(start,true);
        
        	let res;
        	for (const [newStart,value] of mapValue){
            	if (newStart == end) return value;
            	if (visited.get(newStart) != true) {
                	res = dfs(newStart,end,visited);
                	if (res != -1) return res *value;
            	}
        	}
        	return -1;
    	}

if found, return immedietly cause there ain't no duplicate, else try to find the other way.

DFS solution will always be O(n^2) for worst case cause we tried to navigate through everything.
