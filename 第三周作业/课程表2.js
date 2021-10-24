/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // 存储图
    let graph = new Array(numCourses);

    // 各点入度
    let indeg = new Array(numCourses).fill(0);
    let queue = [];
    let res = [];

    for(let i = 0; i < numCourses; i++){
        graph[i] = [];
    }

    for(let info of prerequisites){
        // 构建图关系-- 邻接表
        graph[info[1]].push(info[0]);
        // 列表记录各个点的入度
        ++indeg[info[0]];
    }

    // 入度为0，放入队列
    for(let key in indeg){
        if(indeg[key] === 0){
            queue.push(key);
        }
    }

    // 遍历队列, 输出入度为0
    while(queue.length){
        let node = queue.shift();
        res.push(node);
        for(let nodeValue of graph[node]){
            --indeg[nodeValue];
            if(indeg[nodeValue] === 0){ // 若入度为0，该节点放入队列
                queue.push(nodeValue);
            }
        }
    }
    // 存在循环，课程数量不一致。 不可能学完所有课程
    if(res.length !== numCourses) return [];
    return res;
};