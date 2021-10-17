/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
    //整体思想步骤：
    // 1.建立map作为统计容器
    // 2.循环数组里每个字符串,取出前一部分访问次数和后一部分域名字符串
    // 3.对取到的每个域名字符串再次根据“.”的出现情况做循环筛选
    // 4.每次都把域名当做一个map里的key去使用,其对应的值就是被使用的次数,有则累加,无则新建
var subdomainVisits = function(cpdomains) {
        let obj = new Map();  //存储结果的Map,其中key为域名,value为被访问次数
        for (let i = 0; i < cpdomains.length; i++) {
            let count = 0;
            let str = '';
            count = +cpdomains[i].split(' ')[0]; //取出数字部分
            str = cpdomains[i].split(' ')[1];    //取出域名字符串部分
            //判断结果map里是否已经有当前域名的key, 如果有就累加次数, 如果没有就新建这个域名的key
            obj.has(str) ? obj.set(str, obj.get(str) + count) : obj.set(str, count);
            while (str.indexOf('.') > -1) {
                //如果存在“.”符号就截取“.”后面的内容作为key再次判断
                str = str.substr(str.indexOf('.') + 1);
                obj.has(str) ? obj.set(str, obj.get(str) + count) : obj.set(str, count);
            }
        }
        let arr = [];
        //构造结果数组
        obj.forEach((value,key,map)=>{
            let str = value + ' ' + key;
            arr.push(str);
        })
        return arr;
    };