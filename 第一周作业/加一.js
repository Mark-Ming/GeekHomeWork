/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //数组非空验证
    if(digits.length === 0) return digits;
    //先将最后一个数直接加一
    digits[digits.length - 1]++;
    //从最后一位开始逐个验证
    for(let i = digits.length - 1; i >= 0; i--) {
        //满十进一，进位后是否又满十留到下一次i--之后判断
        if(digits[i] === 10) {
            //当前位设置为0
            digits[i] = 0;
            if(i === 0) {
                //首位满十，头部插入一位
                digits.unshift(1);
            } else {
                //前一位加一
                digits[i - 1]++;
            }
        } else {
            break;
        }
    }
    return digits;
};