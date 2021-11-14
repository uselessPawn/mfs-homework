// Runtime: 76 ms, faster than 71.39% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 40.8 MB, less than 13.79% of JavaScript online submissions for Valid Parentheses.

var isValid = function (s) {
    let l = s.length;

    let brackets = [];
    let bracketsMap = { '(': ')', '[': ']', '{': '}' }
    for (let i = 0; i < l; i++) {
        if (/[\(\[\{]/.test(s[i])) brackets.push(s[i])
        if (/[\)\]\}]/.test(s[i]) && bracketsMap[brackets.pop()] !== s[i]) return false;
    }
    if(brackets.length != 0) return false;
    return true;
};

console.log(isValid("{[]}"))