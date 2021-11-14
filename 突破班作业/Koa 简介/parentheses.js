/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let longest = 0;
    let nestedLen = 0, parLen = 0;
    let temp = [];
    s = s.split('');

    for (let i = 0, l = s.length; i < l; i++) {
        if (s[i] === '(') {
            temp.push(s[i]);
        }
        else {
            if (temp.pop() === '(') { // 合规
                // 先结算嵌套，再结算并行
                nestedLen += 2;
                longest = Math.max(longest, nestedLen, parLen)

                if (temp.length === 0) { // 嵌套结束
                    parLen += nestedLen;
                    longest = Math.max(longest, nestedLen, parLen)
                    nestedLen = 0;
                }

            } else { //不合规
                nestedLen = 0;
                parLen = 0;
                temp = [];
            }
        }
    }
    return longest;
};

console.log(longestValidParentheses("(()(()")) 


// 思路一
// 合法的括号分两种，一种是嵌套，一种是并行
// 可以通过s.length 是否为0判断是否在嵌套中
// 



