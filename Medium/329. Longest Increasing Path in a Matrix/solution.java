class Solution {
    public int[][] dir = { { 0, 1 }, { 0, -1 }, { 1, 0 }, { -1, 0 } };
    public int m = 0,n = 0;
    public int[][] l;
    
    public int dfs(int y, int x, boolean[][] visited, int[][] matrix){ 
        visited[y][x] = true; 
        
        boolean canMove = false;
        if (l[y][x] == 0) {
            // check all four directions
            for (int i = 0; i < 4; i++) {
                // using the direction array
                int newY = y + dir[i][0];
                int newX = x + dir[i][1];

                // not blocked and valid
                if (newY >= 0 && newX >= 0 && newY < m && newX < n) {
                    //not visited and greater than current node
                    if (matrix[newY][newX] > matrix[y][x] && !visited[newY][newX]) {
                        int pathLength = dfs(newY,newX,visited,matrix) + 1;
                        if (pathLength > l[y][x]){
                            l[y][x] = pathLength;
                        }
                        canMove = true;
                    }
                }
            }
            if (!canMove){
                l[y][x] = 1;
            }
        }
        visited[y][x] = false;
        return l[y][x];
    }
    public int longestIncreasingPath(int[][] matrix) {
        m = matrix.length;
        n = matrix[0].length;
    
        int max = 0;
        for (int i = 0; i < m; i++){
            for (int j = 0; j < n; j++){
                l = new int[m][n];
                boolean[][] visited = new boolean[m][n];
                int curPathLength = dfs(i,j,visited,matrix);
                if (curPathLength > max){
                    max = curPathLength;
                }
            }
        }
        return max;
    }
}