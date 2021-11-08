/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0) return false
    let m = 0;
    let n = matrix[0].length -1;
    //从矩阵左上角开始遍历，等于直接跳出，小于向左走一步，大于下走一步
    while(m <= (matrix.length - 1) && n >= 0){
        if(matrix[m][n] === target) return true
        else if(target < matrix[m][n]){
            n--
        }else{
            m++
        }
    }
    return false
};