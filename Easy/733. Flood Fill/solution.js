/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var startFlooding = (image, newValue,oldVal, x, y) => {
    image[x][y] = newValue;
    //go left
    if (x-1 >= 0){
        if (image[x-1][y] == oldVal){
            startFlooding(image,newValue,oldVal,x-1,y);
        }
    }
    //go top
    if (y-1 >= 0){
        if (image[x][y-1] == oldVal){
            startFlooding(image,newValue,oldVal,x,y-1);
        }
    }
    //go right
    if (x+1 < image.length){
        if (image[x+1][y] == oldVal){
            startFlooding(image,newValue,oldVal,x+1,y);
        }
    }
    //go left
    if (y+1 < image[x].length){
        if (image[x][y+1] == oldVal){
            startFlooding(image,newValue,oldVal,x,y+1);
        }
    }

}
var floodFill = function(image, sr, sc, newColor) {
    let oldVal = image[sr][sc];
    if (oldVal != newColor)
        startFlooding(image, newColor,oldVal, sr,sc);
    return image
};