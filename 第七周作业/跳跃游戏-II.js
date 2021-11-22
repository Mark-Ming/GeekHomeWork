/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    //当前跳跃所能到达的边界
    let end = 0;
    //步数
    let steps = 0;
    //当前跳跃所有位置可达的最大距离
    let max = 0;
    //最后一个位置不需要遍历，因为在此之前max肯定大于等于该位置的索引
    for (let i = 0; i < nums.length - 1; i++) {
        //更新当前跳跃中i位置可达的最大距离
        max = Math.max(max, i + nums[i]);
        //已经到达边界，必须跳一下
        if (i === end) {
            end = max; //更新边界
            steps++; //跳一下
        }
    }
    return steps;
};