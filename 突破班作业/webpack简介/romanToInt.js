
// Runtime: 140 ms, faster than 88.01% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 44.4 MB, less than 83.16% of JavaScript online submissions for Roman to Integer.

var romanToInt = function (s) {
    let romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, }
    let result = 0;
    for (let i = 0, l = s.length; i < l; i++) {
        if (s[i + 1]) {
            if (romanMap[s[i]] >= romanMap[s[i + 1]]) result += romanMap[s[i]]
            else result -= romanMap[s[i]]
        } else {
            result += romanMap[s[i]]
        }
    }
    return result
};

console.log(romanToInt('MCMXCIV'))