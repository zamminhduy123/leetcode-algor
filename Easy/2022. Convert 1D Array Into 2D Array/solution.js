/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (m*n !== original.length)
        return [];
    
    const newGrid = [];
    
    let run = 0;
    for (let i = 0; i < m; i++){
        newGrid.push(new Array(n));
        for (let j = 0; j < n; j++){
            newGrid[i][j] = original[run++]
        }
    }
    return newGrid;
};