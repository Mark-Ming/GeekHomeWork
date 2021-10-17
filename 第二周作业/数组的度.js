/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = new Map();
    let size = 1;
    let distance = nums.length;
    //首先循环找到出现最多的次数
    for (let n of nums) {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1); //有则累加,无则初始为1
        size = Math.max(size, map.get(n));//每次把最大值保存到size
    }
    let h = new Map();
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        h.set(cur, h.has(cur) ? h.get(cur) + 1 : 1);
        if (h.get(cur) == size) {
            let start = nums.indexOf(cur);
            //当某个数出现的次数等于size, 取当前索引(indexOf)减去数字初始位置start再加1
            distance = Math.min(distance, i - start + 1);
        }
    }
    return distance;
};