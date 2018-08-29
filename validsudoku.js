/**
 * @param {character[][]} board
 * @return {boolean}
 */

var checkRows = function(board){
    for (let row = 0; row < 9; row ++){
        let check = [];
        for (let column = 0; column < 9; column++){
            let val = board[row][column];
            if (val !== "."){
                if (check[val] === 0){
                    return false;
                }
                else{
                    check[val] = 0;
                }
            }
        }
    }
    return true;
}

var checkColumns = function(board){
    for (let column = 0; column < 9; column ++){
        let check = [];
        for (let row = 0; row < 9; row++){
            let val = board[row][column];
            if (val !== "."){
                if (check[val] === 0){
                    return false;
                }
                else{
                    check[val] = 0;
                }
            }
        }
    }
    return true;
}


var checkSquares = function(board){
    for (let bigRow = 0; bigRow < 9; bigRow += 3){
        for(let bigCol = 0; bigCol < 9; bigCol += 3){
            let check = [];
            for (let littleRow = 0; littleRow < 3; littleRow ++){
                for (let littleCol = 0; littleCol < 3; littleCol ++){
                    let val = board[bigRow+littleRow][bigCol+littleCol];
                    if (val !== "."){
                        if (check[val] === 0){
                            return false;
                        }
                        else{
                            check[val] = 0;
                        }
                    }
                }
            }
        }
    }
    return true
}

var isValidSudoku = function(board) {
    return (checkRows(board) && checkColumns(board) && checkSquares(board))
};