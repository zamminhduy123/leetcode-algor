/**
 * @param {number} n
 * @return {number[][]}
 */
var spiralGenerate = function(arr, level, run) {
    //top
    for (let i = level; i < arr.length - level; i++) {
        arr[level][i] = run++;
    }
    
    //right
    for (let i = level+1; i < arr.length - level; i++) {
        arr[i][arr.length-1-level] = run++;
    }
    
    //bottom
    for (let i = arr.length - 2 - level; i >= level; i--) {
        arr[arr.length-1-level][i] = run++;
    }
    
    //left
    for (let i = arr.length - 2 - level; i > level; i--) {
        arr[i][level] = run++;
    }
    
    if (run <= arr.length*arr.length){
        spiralGenerate(arr,level+1,run);
    }
}


var generateMatrix = function(n) {
    const nestedArray = Array.from({ length: n }, () =>
      Array.from({ length: n }, () => false)
    );
    spiralGenerate(nestedArray,0,1);
    return nestedArray
};