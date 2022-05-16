class Solution {
public:
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        const int n = grid.size();
        if (grid[0][0] || grid[n-1][n-1])
            return -1;
        
        if (n == 1) {
            return 1;
        }
        
        vector<vector<bool>> visited(n, vector<bool>(n,false));
        queue<pair<int,int>> q;
        
        visited[0][0] = true;
        q.push({0,0});
        
        int step = 1;
        int dx,dy;
        
        while(!q.empty()){
            
            int q_size = q.size();
            
            for (int i = 0; i < q_size; i++){
                pair<int,int> f = q.front();
                
                visited[f.first][f.second] = true;
                q.pop();

                for (dx = -1; dx <= 1; ++dx) {
                    int x = f.first + dx;
                    if (x >= 0 && x < n) {
                        for (dy = -1; dy <= 1; ++dy) {
                            if (dx != 0 || dy != 0) {
                                int y = f.second + dy;
                                if (y >= 0 && y < n){
                                    // start checking if zero
                                    if (grid[x][y] == 0 && !visited[x][y]){
                                        if (x == n-1 && y == n-1){
                                            return step+1;
                                        } else {
                                            visited[x][y] = true;
                                            q.push({x,y});
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            step++;
        }
        return -1;
    }
};