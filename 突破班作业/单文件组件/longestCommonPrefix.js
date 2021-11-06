// Runtime: 76 ms, faster than 83.92% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 40.8 MB, less than 25.04% of JavaScript online submissions for Longest Common Prefix.

var longestCommonPrefix = function (strs) {
    let result = ''
    let minL = Math.min(...(strs.map((cur) => cur.length)))
    let strL = strs.length;

    for (let i = 0; i < minL; i++) {
        let target = strs[0][i];
        for (let j = 0; j < strL; j++) {
            if (strs[j][i] !== target) return result;
            if (j === strL - 1) result += strs[j][i]
        }
    }
    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))