
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const newArray = [];
    if (Array.isArray(matrix)) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                for (let j = 0; j < matrix[i].length; j++) {
                    newArray.push(matrix[i][j]);
                }
            } else {
                let test = matrix[i].reverse();
                for (let j = 0; j < test.length; j++) {
                    newArray.push(test[j]);
                }
            }
        }
    }
    return newArray;
}
