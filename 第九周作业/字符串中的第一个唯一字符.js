/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //长度为26的数组，存放字符的出现次数
    const counts = new Array(26).fill(0);
    //遍历s，统计每个字符出现次数
    for (const c of s) {
        //97是a的Unicode值
        counts[c.charCodeAt(0) - 97]++;
    }
    for (let i = 0; i < s.length; i++) {
        //再次遍历s,找出第一个频次为1的字符的索引
        if (counts[s[i].charCodeAt(0) - 97] == 1) {
            return i;
        }
    }
    return -1;
};