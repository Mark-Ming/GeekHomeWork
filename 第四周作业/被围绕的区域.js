/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m = board.length;
    if (m === 0) return;  //[]情况的特判
    const n = board[0].length;
    const dfs = (i, j) => {
        if (i < 0 || i === m || j < 0 || j === n) return; //越界
        //遇到O，染为NO
        if (board[i][j] === 'O') {
            board[i][j] = 'NO';
            // 对四个方向的邻居进行dfs
            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        }
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                //从最外层的O，开始DFS
                if (board[i][j] === 'O') dfs(i, j);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'NO') board[i][j] = 'O';     // 恢复为O
            else if (board[i][j] === 'O') board[i][j] = 'X'; // O变为X
        }
    }
};