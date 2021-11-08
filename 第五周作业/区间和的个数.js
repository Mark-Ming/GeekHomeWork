/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    let n = nums.length;
    let sum = new Array(n+1).fill(0);
    let sumAll = [];
    sum[0] = 0;
    sumAll.push(0, lower, upper);
    for(let i = 1;i <= n;i ++) {
        sum[i] = sum[i-1] + nums[i-1];
        sumAll.push(sum[i], sum[i]+lower, sum[i]+upper);
    }
    // 排序 -> 方便离散化
    sumAll.sort((a,b)=>{
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    });
    // 离散化
    let mapping = new Map();
    let index = 1;
    mapping.set(sumAll[0], 1);
    for (let i = 1;i < sumAll.length;i ++) {
        if (sumAll[i] === sumAll[i-1]) continue;
        mapping.set(sumAll[i], ++index);
    }
    // 树状数组操作
    let bit = new Array(mapping.size+1).fill(0);
    function update(bit, index, MAXLEN) {
        while(index <= MAXLEN) {
            bit[index] += 1;
            index += (index&(-index));
        }
    }
    function query(bit, index) {
        let s = 0;
        while(index > 0) {
            s += bit[index];
            index -= (index&(-index));
        }
        return s;
    }
    let ans = 0;
    for (let i = n; i >= 0;i --) {
        ans += (query(bit, mapping.get(sum[i]+upper)) - query(bit, mapping.get(sum[i]+lower)-1));
        update(bit, mapping.get(sum[i]), mapping.size);
    }
    return ans;
};