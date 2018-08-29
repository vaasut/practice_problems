var generate = function(numRows) {
    let triangle = [];
    for (let i = 0; i < numRows; i++){
        if (i === 0){
            triangle[0] = [1];
        }
        else{
            let row = [];
            for (let j = 0; j < i+1; j++){
                if (j === 0 || j === i){
                    row[j] = 1;
                }
                else{
                    row[j] = triangle[i-1][j-1] + triangle[i-1][j];
                }
            }
            triangle[i] = row;
        }
    }
    return triangle;
};