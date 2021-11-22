/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    //最大路径和
    let maxSum = Number.MIN_SAFE_INTEGER;
    //遍历到null节点，收益0
    const dfs = (root) => {
        if (root == null) {
            return 0;
        }
        //左子树提供的最大路径和
        const left = dfs(root.left);
        //右子树提供的最大路径和
        const right = dfs(root.right);
        //当前子树内部的最大路径和
        const innerMaxSum = left + root.val + right;
        //挑战最大纪录
        maxSum = Math.max(maxSum, innerMaxSum);
        //当前子树对外提供的最大和
        const outputMaxSum = root.val + Math.max(0, left, right);
        // 如果对外提供的路径和为负，直接返回0。否则正常返回
        return outputMaxSum < 0 ? 0 : outputMaxSum;
    };
    dfs(root);//递归的入口
    return maxSum;
};