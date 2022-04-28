/**
 * @param {number[][]} heights
 * @return {number}
 */

var minimumEffortPath = function(heights) {
    const adjacent = [[0,1],[1,0],[-1,0],[0,-1]];
 
    const traverse = (x, y, k, visited) => {
        visited[x][y] = true;
        if (x === heights.length-1 && y === heights[x].length-1){
            return true;
        }
        for (const adj of adjacent){
            let newX = x + adj[0],
                newY = y + adj[1];
            if (newX >= 0 && newX < visited.length && newY >= 0 && newY < visited[x].length) {
                if (!visited[newX][newY] && Math.abs(heights[newX][newY]-heights[x][y]) <= k) {
                    if (traverse(newX,newY,k,visited)){
                        return true;
                    }
                }
            }
        }
        
        return false;
    } 
    
    let low = 0, high = 1e6, ans = -1;

    // set high and low  
    while (low <= high)
    {
        let mid = parseInt(low + (high - low) / 2);
        // get a mid 
        // apply bfs over that mid value 
        const visited = heights.map(el => el.map(el2=>false));
        if (traverse(0,0, mid,visited))
        {
            // if that bfs on that value return true , it might be our answer , so store it 
            ans = mid;
            high = mid - 1;
            // since we want want min value , high=mid-1
        }
        else
        {
            low = mid + 1;
            // else increase the value and check for it 
        }
    }
    return ans;
};