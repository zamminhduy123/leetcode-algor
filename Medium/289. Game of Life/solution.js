/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const countNeighbor = (board,i,j) => {
    let count = 0;
    const isLeft = (j-1 >= 0), isRight = (j+1 < board[i].length),
          isUp = (i-1 >= 0), isDown = (i+1 < board.length);
    //up
    if (isUp){
        if (board[i-1][j] === 1 || board[i-1][j] === -2) count++;
        //up left
        if (isLeft){
            if (board[i-1][j-1] === 1 || board[i-1][j-1] === -2) count++;
        }
        // up right
        if (isRight){
            if (board[i-1][j+1] === 1 || board[i-1][j+1] === -2) count++;
        }
    }
    //left
    if (isLeft){
        if (board[i][j-1] === 1 || board[i][j-1] === -2) count++;
    }
    //down
    if (isDown){
        if (board[i+1][j] === 1 || board[i+1][j] === -2) count++;
        //down left
        if (isLeft){
            if (board[i+1][j-1] === 1 || board[i+1][j-1] === -2) count++;
        }
        // down right
        if (isRight){
            if (board[i+1][j+1] === 1|| board[i+1][j+1] === -2) count++;
        }
    }
    //right
    if (isRight){
        if (board[i][j+1] === 1 || board[i][j+1] === -2) count++;
    }
    
    return count;
}

var gameOfLife = function(board) {
    for (let i = 0 ; i < board.length; i++){
        for (let j = 0 ; j < board[i].length; j++){
            let neighbor = countNeighbor(board,i,j);
            //dead
            if (board[i][j] === 0){
                if (neighbor === 3)
                    board[i][j] = -1;
            } 
            //alive
            else {
                if (neighbor < 2 || neighbor > 3 ){
                    board[i][j] = -2;
                } else {
                    board[i][j] = 1;
                }
                
            }
        }
    }
    for (let i = 0 ; i < board.length; i++){
        for (let j = 0 ; j < board[i].length; j++){
            if (board[i][j] === -1)
                board[i][j] = 1;
            else if (board[i][j] === -2)
                board[i][j] = 0;
        }
    }
};