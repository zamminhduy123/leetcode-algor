/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length, n = obstacleGrid[0].length;
    
    const DP = obstacleGrid.map(row => row.map(el => el));
    DP.forEach(row => row.fill(0));
    
    if (obstacleGrid[0][0] == 1 || obstacleGrid[m-1][n-1] == 1){
        return 0;
    }
    DP[0][0] = 1;
    
    for (let i = 1; i < n; i++){
        if (obstacleGrid[0][i] == 0){
            DP[0][i] = DP[0][i-1];
        } else {
            DP[0][i] = 0;
        }
    }        
    for (let i = 1; i < m; i++){
       if (obstacleGrid[i][0] == 0){
            DP[i][0] = DP[i-1][0];
        } else {
            DP[i][0] = 0;
        }
    }  
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){
            if (obstacleGrid[i][j] == 0){
                DP[i][j] = DP[i-1][j] + DP[i][j-1];
            } else {
                DP[i][j] = 0;
            }
        }
    }
    
    return DP[m-1][n-1];
};