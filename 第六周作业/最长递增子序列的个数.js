/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    // 初始化dp数组
    let len = nums.length;
    let dp = Array(len).fill(1);
    let count = Array(len).fill(1);
    let res = 0;
    //找到最长子序列并做好标记
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                //第1种情况： LIS出现在以nums[j]结尾的地方而不是以nums[i]结尾的地方
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    count[i] = count[j];
                } else if (dp[j] + 1 === dp[i]) {
                    //第2种情况： LIS同时出现在以nums[j]结尾的地方和以nums[i]结尾的地方
                    dp[i] = dp[i];
                    count[i] += count[j];
                } else {
                    //第3种情况： LIS出现在以nums[i]结尾的地方而不是以nums[j]结尾的地方
                    dp[i] = dp[i]
                    count[i] = count[i]
                }
            }
        }
    }
    //统计一下 max 出现的次数
    let max = Math.max(...dp);
    //统计所有LIS的个数就要遍历
    for (let i = 0; i < len; i ++) if(dp[i] === max) res += count[i];
    return res;
};