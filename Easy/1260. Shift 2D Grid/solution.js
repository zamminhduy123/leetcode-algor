/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const newGrid = [];
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            newGrid.push(grid[i][j]);
        }
    }

    let run = newGrid.length - k%newGrid.length;
    
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            grid[i][j] = newGrid[run%newGrid.length];
            run++;
        }
    }
    return grid
};