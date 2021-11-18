/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2) return n;
    let f1 = 1;
    let f2 = 2;
    let f3 = 3;
    for(let i = 3; i <= n; i++)
    {
        f3 = f2 + f1;
        f1 = f2;
        f2 = f3;
    }
    return f3;
};