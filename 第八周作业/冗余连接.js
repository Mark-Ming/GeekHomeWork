/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    //并查集初始化，每个点的根结点是自己
    let arr = new Array(edges.length + 2).fill(0).map((_,index) => index);
    for(let i = 0; i < edges.length; i++){
        //分析当前边的两个点
        let a = edges[i][0];
        let b = edges[i][1];
        let para = arr[a];
        let parb = arr[b];
        //找到a点的根结点
        while(para !== arr[para]) para = arr[para];
        //找到b点的根结点
        while(parb !== arr[parb]) parb = arr[parb];
        //如果两个根结点一样，则两个点已经联通，当前边为重复边，返回当前边
        if(parb === para) return edges[i];
        //否则将两个点链接
        arr[parb] = para;
    }
    return edges[edges.length - 1];
};